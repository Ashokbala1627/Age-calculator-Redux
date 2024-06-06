// ageSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  years: 0,
  months: 0,
  days: 0
};

const ageSlice = createSlice({
  name: 'age',
  initialState,
  reducers: {
    calculateAge: (state, action) => {
      const birthdate = new Date(action.payload);
      const today = new Date();
      let years = today.getFullYear() - birthdate.getFullYear();
      let months = today.getMonth() - birthdate.getMonth();
      let days = today.getDate() - birthdate.getDate();

      // Adjust months and years if necessary
      if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
      }
      if (days < 0) {
        const prevMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
        const daysInPrevMonth = new Date(prevMonth.getFullYear(), prevMonth.getMonth() + 1, 0).getDate();
        days += daysInPrevMonth;
        months--;
      }

      // Check if the calculated age is negative
      if (years < 0 || months < 0 || days < 0) {
        // If any part of the age is negative, set it to zero
        state.years = 0;
        state.months = 0;
        state.days = 0;
      } else {
        // Otherwise, set the calculated age
        state.years = years;
        state.months = months;
        state.days = days;
      }
    },
    clearAge: (state) => {
      state.years = 0;
      state.months = 0;
      state.days = 0;
    }
  }
});

export const { calculateAge, clearAge } = ageSlice.actions;

export default ageSlice.reducer;
