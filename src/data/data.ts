import { Class } from "@/components/layout/classes/column";

// for convenience purposes, we are using a function to add days to the current date
function addDaysToCurrentDate(days: number) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.getTime();
}

// The following arrangement make sure first class is always live
// second is < 24h away and so on.
export const classList: Class[] = [
  {
    id: "1",
    name: "UI/UX Design",
    status: "booked",
    staff: "John Doe",
    timestamp: addDaysToCurrentDate(0),
  },
  {
    id: "2",
    name: "Graphic Designing",
    status: "booked",
    staff: "Jane Smith",
    timestamp: addDaysToCurrentDate(1),
  },
  {
    id: "3",
    name: "Basics of Frontend",
    status: "not_booked",
    staff: "Bob Johnson",
    timestamp: addDaysToCurrentDate(2),
  },
  {
    id: "4",
    name: "Advanced Frontend",
    status: "not_booked",
    staff: "Alice Williams",
    isDisabled: true,
    timestamp: addDaysToCurrentDate(3),
  },
  {
    id: "5",
    name: "Backend Development",
    status: "booked",
    staff: "Charlie Brown",
    timestamp: addDaysToCurrentDate(4),
  },
  {
    id: "6",
    name: "Full Stack Development",
    status: "not_booked",
    staff: "David Davis",
    timestamp: addDaysToCurrentDate(5),
  },
  {
    id: "7",
    name: "Data Science",
    status: "not_booked",
    staff: "Eva Green",
    timestamp: addDaysToCurrentDate(6),
  },
  {
    id: "8",
    name: "Machine Learning",
    status: "booked",
    staff: "Frank Sinatra",
    timestamp: addDaysToCurrentDate(7),
  },
  {
    id: "9",
    name: "Artificial Intelligence",
    status: "booked",
    staff: "Grace Kelly",
    timestamp: addDaysToCurrentDate(8),
  },
  {
    id: "10",
    name: "Cloud Computing",
    status: "not_booked",
    staff: "Harry Potter",
    timestamp: addDaysToCurrentDate(9),
  },
];
