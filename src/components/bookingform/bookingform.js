import "./bookingform.css"; 
import { useState } from "react";

const [resDate, setResDate] = useState[""];
const [resTime, setResTime] = useState[""];
const [gest, setGuest] = useState[0];
const [occasion, setOccasion] = useState[""];

export const Bookingform = () => {
    return (
    <div className="formcontain">
        <h2>Please fill the information for your reservation:</h2>
        <form className="bookingform">
            <label htmlForfor="res-date">Choose date</label>
            <input type="date" id="res-date"/>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time ">
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests"/>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion">
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" />
        </form>
    </div>
    );
};
