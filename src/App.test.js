import { render, screen } from "@testing-library/react";
import App from "./App";
import BookingForm from "./BookingForm";
import { initializeTimes, updateTimes } from "./Main";

test("renders choose date label", () => {
  const mockAvailableTimes = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];

  const mockDispatch = jest.fn();

  render(
    <BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />
  );
  const labelElement = screen.getByText("Choose date:");
  expect(labelElement).toBeInTheDocument();
});

test("initialTimes and UpdateTimes return expected value", () => {
  const initialTimes = initializeTimes();
  expect(initialTimes).toEqual([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  const updatedTimes = updateTimes();
  expect(updatedTimes).toEqual([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
});
