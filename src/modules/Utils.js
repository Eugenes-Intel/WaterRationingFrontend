export const roundFloat = (number) => {
  return Math.round((number + Number.EPSILON) * 100) / 100;
};

export const convertDensity = (value) => {
  switch (value) {
    case 1:
      return "Low";
    case 2:
      return "Medium";
    case 3:
      return "High";
    default:
      return "N/A";
  }
};
