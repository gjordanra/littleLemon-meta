import "./bookingform.css";
import { useState } from "react";
import { validateEmail } from "../../utils/utils";

export const Bookingform = () => {
    const [resDate, setResDate] = useState("");
    const [resTime, setResTime] = useState("");
    const [guest, setGuest] = useState(1);
    const [occasion, setOccasion] =useState("");
    const availableTimes = ["15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const timeOptions = availableTimes.map(time => {
        return <option>{time}</option>
    });

    const getIsFormValid = () => {
        return validateEmail("gus@gmail.com");
    };

    const clearForm = () => {
        setResDate("");
        setResTime("");
        setGuest(1);
        setOccasion("");
    };

    const handleSumit = (e) => {
        e.preventDefault();
        alert("Thanks for your reservation!"); 
        clearForm();
    }

    return (
      <div className="formcontain">
        <h2>Request your reservation, Please fill the next form:</h2>
        <form className="bookingform" onSubmit={handleSumit}>
          <label htmlFor="res-date">Choose date</label>
          <input
            type="date"
            id="res-date"
            value={resDate}
            onChange={(e) => {
              setResDate(e.target.value);
            }}
          />
          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time"
            value={resTime}
            onChange={(e) => {
              setResTime(e.target.value);
            }}
          >
            {timeOptions}
          </select>
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={guest}
            onChange={(e) => {
              setGuest(e.target.value);
            }}
          />
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            value={occasion}
            onChange={(e) => {
              setOccasion(e.target.value);
            }}
          >
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
          <button
            type="submit"
            value="Make Your reservation"
            disabled={!getIsFormValid()}
          >
            Make Your reservation
          </button>
        </form>
      </div>
    );
};
