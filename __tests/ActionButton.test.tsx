import React from "react";
import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import ActionButton from "@/components/ui/Action/ActionButton";

// if the status is not_booked, then the button should show "Book now"

describe("ActionButton", () => {
  it("renders without crashing", () => {
    const { getByText } = render(
      <ActionButton status="not_booked" timestamp={Date.now()} />,
    );
    const button = getByText("Book now");
    expect(button).toBeInTheDocument();
  });
});

// if the status is booked, button renders 3 different states:
// 1. "Join now" if the timestamp is current or past
// 2. A countdown timer if the timestamp is within 24 hours
// 3. "X days" if the timestamp is more than 24 hours away

describe("ActionButton", () => {
  it("renders 'Join now' when status is 'booked' and timestamp is current or past", () => {
    const { getByText } = render(
      <ActionButton status="booked" timestamp={Date.now()} />,
    );
    const button = getByText("Join now");
    expect(button).toBeInTheDocument();
  });

  it("renders a timer when status is 'booked' and timestamp is within 24 hours", async () => {
    const { findByTestId } = render(
      <ActionButton
        status="booked"
        timestamp={Date.now() + 60 * 60 * 1000 * 3}
      />,
    );
    // Utilizing testId just for this test demo
    const button = await findByTestId("action-button");
    // wait for the timer to render first
    await waitFor(() => {
      expect(button.textContent).toMatch(/\d+h \d+m \d+s/);
    });
  });

  it("renders 'X days' when status is 'booked' and timestamp is more than 24 hours away", () => {
    const { getByText } = render(
      <ActionButton
        status="booked"
        timestamp={Date.now() + 48 * 60 * 60 * 1000}
      />,
    );
    const button = getByText(/\d+ days/);
    expect(button).toBeInTheDocument();
  });
});
