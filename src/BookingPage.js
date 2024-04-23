import BookingForm from "./BookingForm";

export default function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </>
  );
}
