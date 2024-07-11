import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "../button";

type ConfirmBookedProps = {
  onConfirm: () => void;
};

export default function ConfirmBooked(props: ConfirmBookedProps) {
  const { onConfirm } = props;
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className={`w-[150px] flex gap-x-2`}>
          Book now
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Confirm booking?</AlertDialogTitle>
          <AlertDialogDescription>
            Once you confirm, you cannot undo this action.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm}>Confirm</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
