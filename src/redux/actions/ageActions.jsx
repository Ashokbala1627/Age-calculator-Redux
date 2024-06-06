export const calculateAge = (birthdate) => {
    return {
      type: 'CALCULATE_AGE',
      payload: birthdate
    };
  };
  