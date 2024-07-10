import { status } from "@/lib/types/status";
import { Button } from "../button";
import ExternalLinkIcon from "../Icons/ExternalLinkIcon";
import ClockIcon from "../Icons/ClockIcon";

type ActionButtonProps = {
  status: status;
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
  const { status } = props;

  const styles = {
    booked: "text-[#1469D3]",
    not_booked: "",
    live: "bg-[#2080F6] text-white",
    disabled: "",
  };

  const texts = {
    booked: "2:40:34",
    not_booked: "Book now",
    live: "Join now",
    disabled: "Disabled",
  };

  const variant: VariantMap = {
    booked: "ghost",
    live: "default",
    not_booked: "outline",
    disabled: "default",
  };

  return (
    <Button
      variant={variant[status]}
      className={`${styles[status]} w-[110px] flex gap-x-2`}
    >
      {texts[status]}
      {status === "live" && <ExternalLinkIcon />}
      {status === "booked" && <ClockIcon />}
    </Button>
  );
}
