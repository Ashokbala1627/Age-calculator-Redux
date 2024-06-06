import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { calculateAge } from "../redux/reducers/ageSlice";
import "../styles/ageCalculator.css";

const AgeCalculator = () => {
  const [birthdate, setBirthdate] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentDate = new Date();
    const selectedDate = new Date(birthdate);
    if (!birthdate) {
      setError("Please enter a valid birthdate");
    } else if (selectedDate > currentDate) {
      setError("Birthdate cannot be greater than current date");
    } else {
      dispatch(calculateAge(birthdate));
      setError("");
    }
  };

  return (
    <div className="age-calculator-container">
      <form onSubmit={handleSubmit}>
        <input
          className="birthdate-input"
          type="date"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
        <button className="calculate-button" type="submit">
          Calculate Age
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default AgeCalculator;
