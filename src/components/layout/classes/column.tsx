import { status } from "@/lib/types/status";
import { ColumnDef } from "@tanstack/react-table";
import dayjs from "dayjs";
import calendar from "dayjs/plugin/calendar";
import ActionButton from "@/components/ui/Action/ActionButton";
dayjs.extend(calendar);

export type Class = {
  id: string;
  name: string;
  status: status;
  staff: string;
  isDisabled?: boolean;
  timestamp: number;
};

export const columns: ColumnDef<Class>[] = [
  {
    header: "Class name",
    accessorKey: "name",
    cell: ({ row }) => {
      const index: number = row.index;
      const name: string = row.getValue("name");
      const timestamp: number = row.original.timestamp;

      return (
        <div className="flex items-center gap-x-6">
          <span className="text-sm text-[#A1A0A3] font-medium">
            {index + 1}
          </span>
          <div>
            <div className="text-sm text-[#222124] tracking-tight font-semibold">
              {name}
            </div>
            <div className="tracking-light  text-[#5F5F61]">
              {dayjs(timestamp).calendar()}
            </div>
          </div>
        </div>
      );
    },
  },
  {
    header: "Staff name",
    accessorKey: "staff",

    cell: ({ row }) => {
      const staff: string = row.getValue("staff");

      return (
        <div className="flex items-center gap-x-4">
          <img
            src={`https://api.dicebear.com/9.x/pixel-art/svg?seed=${staff}`}
            width={40}
            height={40}
            alt="staff"
          />
          <div>
            <div className="text-sm text-[#222124] tracking-tight font-semibold">
              {staff}
            </div>
            <div className="tracking-light  text-[#5F5F61]">
              Additional details
            </div>
          </div>
        </div>
      );
    },
  },
  {
    header: "Actions",
    accessorKey: "status",

    cell: ({ row }) => {
      const status: status = row.getValue("status");
      const timestamp = row.original.timestamp;

      return <ActionButton status={status} timestamp={timestamp} />;
    },
  },
];
