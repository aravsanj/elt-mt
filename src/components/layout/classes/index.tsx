"use client";

import { columns } from "./column";
import { DataTable } from "./table";
import { classList as classListRaw } from "../../../data/data";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState } from "react";

export default function ClassList() {
  const [classList, setClassList] = useState(classListRaw);
  const [isBookedChecked, setIsBookedChecked] = useState(false);

  function toggleBooked() {
    setIsBookedChecked(!isBookedChecked);
  }

  useEffect(() => {
    if (isBookedChecked) {
      setClassList(classListRaw.filter((item) => item.status === "booked"));
    } else {
      setClassList(classListRaw);
    }
  }, [isBookedChecked]);

  return (
    <div className="w-[650px] h-[880px] rounded-lg space-y-4 bg-white p-4">
      <div className="flex justify-between">
        <div>
          <p className="text-2xl text-[#313336] font-semibold">
            Upcoming classes
          </p>
          <p className="text-xs text-[#5F5F61] tracking-tight">
            For next 7 days
          </p>
        </div>
        <div className="flex items-center gap-x-2">
          <label
            htmlFor="booked"
            className="text-sm font-medium tracking-tight"
          >
            Booked only
          </label>
          <Checkbox onCheckedChange={() => toggleBooked()} id="booked" />
        </div>
      </div>
      <DataTable columns={columns} data={classList} />
    </div>
  );
}
