import { status } from "@/lib/types/status";
import { Button } from "../button";
import ExternalLinkIcon from "../Icons/ExternalLinkIcon";
import ClockIcon from "../Icons/ClockIcon";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Countdown from "../CountDown";
import { useState } from "react";
import ConfirmBooked from "../Alert/ConfirmBooked";
dayjs.extend(relativeTime);

type ActionButtonProps = {
  status: status;
  timestamp: number;
};

type ButtonVariant =
  | "ghost"
  | "outline"
  | "default"
  | "destructive"
  | "secondary"
  | "link"
  | null
  | undefined;

type VariantMap = {
  [key: string]: ButtonVariant;
};

export default function ActionButton(props: ActionButtonProps) {
  const { status, timestamp } = props;
  // We are going to use a state to toggle the booked status just for the show
  const [toggleBooked, setToggleBooked] = useState<boolean>(false);

  // We are going to find the difference between the timestamp and the current time
  const diffHours = dayjs(timestamp).diff(dayjs(), "hours");

  let timeLeft;

  // If the difference is more than 24 hours, we are going to show the time left in days
  // Otherwise, we are going to show the time left in hours, minutes, and seconds
  if (diffHours > 24) {
    timeLeft = dayjs(timestamp).toNow(true);
  } else {
    timeLeft = <Countdown endTime={dayjs(timestamp)} />;
  }

  // If the class is booked and the difference is less than or equal to 0, then the class is live
  // For the sake of simplicity, we are going to ignore live classes that are not booked
  const isBooked = status === "booked" || toggleBooked;
  const isLive = isBooked && diffHours <= 0;

  const styles = {
    booked: isLive
      ? "bg-[#2080F6] text-white"
      : "text-[#1469D3] hover:text-[#2080F6]",
    not_booked: toggleBooked ? "text-[#1469D3] hover:text-[#2080F6]" : "",
  };

  const texts = {
    booked: isLive ? "Join now" : timeLeft,
    not_booked: toggleBooked ? timeLeft : "Book now",
  };

  const variant: VariantMap = {
    booked: isLive ? "default" : "ghost",
    not_booked: toggleBooked ? "ghost" : "outline",
  };

  const iconToRender = isLive ? (
    <ExternalLinkIcon />
  ) : isBooked ? (
    <ClockIcon />
  ) : null;

  function handleBookNow() {
    setToggleBooked(true);
  }

  if (!isBooked) return <ConfirmBooked onConfirm={handleBookNow} />;

  return (
    <Button
      data-testid="action-button"
      variant={variant[status]}
      className={`${styles[status]} w-[150px] flex gap-x-2`}
    >
      {texts[status]}
      {iconToRender}
    </Button>
  );
}
