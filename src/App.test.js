import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './components/BookingForm';
import { fetchAPI, submitAPI, initializeTimes, updateTimes } from './api';

describe("BookingFrom", () =>{
  test("Renders label and feilds", () =>{
    render(
      <BookingForm
        availableTimes={{
          times: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
        }}
        dispatch={jest.fn((action) => action)}
      />
    );
    //Date label and field
    const DateLabel = screen.getByText("Choose date");
    expect(DateLabel).toBeInTheDocument();
    const dateField = screen.getByTestId("res-date");
    expect(dateField).toBeInTheDocument();

    const timeLabel = screen.getByText("Choose Time")
    expect(timeLabel).toBeInTheDocument();
    const timefeild = screen.getByTestId("res-time")
    expect(timefeild).toBeInTheDocument();

    const guestsLabel = screen.getByText("Number of Guests");
    expect(guestsLabel).toBeInTheDocument();
    const guestsField = screen.getByTestId("res-guests");
    expect(guestsField).toBeInTheDocument();

    const occasionLabel = screen.getByText("Occasion");
    expect(occasionLabel).toBeInTheDocument();
    const occasionField = screen.getByTestId("res-occasion");
    expect(occasionField).toBeInTheDocument();

    const submitButton = screen.getByDisplayValue("Make Your reservation");
    expect(submitButton).toBeInTheDocument();
  });

  test("initializeTimes returns the correct expected value", () => {
    const today = new Date();
    const initialState = initializeTimes();
    const expectedResult = {times:fetchAPI(today)};
    expect(initialState).toEqual(expectedResult);
  });
 
 test("updateTimes returns the same state",() => {
  const state = {
    times: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
  };
  const action = { type: "SOME_ACTION" };
  const newState = updateTimes(state, action);
  expect(newState).toEqual(state);
 });
 test("submitAPI returns true", () => {
  const formData = {
    date: "2022-10-12",
    time: "20:00",
    guests: 5,
    occasion: "Birthday",
  };
  const result = submitAPI(formData);
  expect(result).toBe(true);
});


});
