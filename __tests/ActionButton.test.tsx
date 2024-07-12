import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ActionButton from "@/components/ui/Action/ActionButton";

// if the status is not booked, then the button should show "Book now"

describe("ActionButton", () => {
  it("renders without crashing", () => {
    const { getByText } = render(
      <ActionButton status="not_booked" timestamp={Date.now()} />,
    );
    const button = getByText("Book now");
    expect(button).toBeInTheDocument();
  });
});

describe("ActionButton", () => {
  it("renders without crashing", () => {
    const { getByText } = render(
      <ActionButton status="booked" timestamp={Date.now()} />,
    );
    const button = getByText("Join now");
    expect(button).toBeInTheDocument();
  });
});
