import { useState } from "react";

export default function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [bookingGuests, setBookingGuests] = useState("1");
  const [bookingOccasion, setBookingOccasion] = useState("");

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setBookingDate(selectedDate);
    dispatch(selectedDate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(e);
  };

  return (
    <>
      {console.log(availableTimes.availableTimes)}
      <form onSubmit={handleSubmit} className="booking-form-container">
        <div className="booking-form">
          <div>
            <label htmlFor="res-date">Choose date: </label>
            <input
              id="res-date"
              type="date"
              value={bookingDate}
              onChange={handleDateChange}
            />
          </div>

          <div>
            <label htmlFor="res-time">Choose time: </label>
            <select
              id="res-time"
              onChange={(e) => setBookingTime(e.target.value)}
              value={bookingTime}
            >
              <option value="">Select a Time</option>
              {availableTimes.availableTimes.map((availableTimes) => {
                return <option key={availableTimes}>{availableTimes}</option>;
              })}
            </select>
          </div>

          <div>
            <label htmlFor="guests">Number of guests: </label>
            <input
              type="number"
              id="guests"
              placeholder="1"
              min="1"
              max="10"
              value={bookingGuests}
              onChange={(e) => setBookingGuests(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="occasion">Occasion: </label>
            <select
              id="occasion"
              onChange={(e) => setBookingOccasion(e.target.value)}
              value={bookingOccasion}
            >
              <option value="N/A">N/A</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>
          </div>
          <button aria-label="On Click" type="submit" name="" id="">
            Make your reservation!
          </button>
        </div>
      </form>
    </>
  );
}
