export const styles = {
  font: {
    fontSize: "60px",
    "@media (max-width: 639px)": {
      fontSize: "25px",
    },
  },font1: {
    fontSize: "14px",
    "@media (max-width: 639px)": {
      fontSize: "16px",
    },
  }, about: {
    fontSize: "30px",
    "@media (max-width: 639px)": {
      fontSize: "16px",
    },
  },
    grid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr", // Three columns by default
      gap: "10px",
      paddingLeft: "10px", // Adding !important here might not be necessary
      "@media (max-width: 639px)": {
        gridTemplateColumns: "1fr", // Single column on mobile
        gap: "2rem",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        fontSize: "14px",
      },
    },  grid1: {
      display: "grid",
      "@media (max-width: 639px)": {
        gridTemplateColumns: "1fr", // Single column on mobile
        fontSize: "14px",
      },
    },
  };
  