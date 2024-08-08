/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        heading: "3.75rem",
        subheading: "3rem",
        tertiary: "2.25rem",
      },
      colors: {
        primary: "#CBFE00",
        secondary: "#ffffff",
        lightblue: "#d9f4ff",
        bg1: "#2A2A2A",
        // bg2: "#2D343F",
        // dark1: "#001c22",
      },
      dropShadow: {
        "3xl": "0 35px 35px rgba(255, 255, 255, 0.25)",
      },
      screens: {
        xssmall: "400px",
        small: "475px",
        medium: "600px",
      },
    },
  },
  plugins: [],
};
