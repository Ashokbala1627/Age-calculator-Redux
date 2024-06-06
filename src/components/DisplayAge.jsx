import React from "react";
import { useSelector } from "react-redux";
import "../styles/ageCalculator.css";

const DisplayAge = () => {
  const { years, months, days } = useSelector((state) => state.age);
  const birthdateEntered = years !== 0 || months !== 0 || days !== 0;

  return (
    <div>
      {birthdateEntered ? (
        <h2 className="result-message">
          Your Age: {years} years {months} months {days} days
        </h2>
      ) : (
        <p className="warning">Please enter your birthdate</p>
      )}
    </div>
  );
};

export default DisplayAge;
