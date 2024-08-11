/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Montserrat", "sans-serif"],
        secondary: ["Fira Code", "monospace"],
      },
      fontSize: {
        heading: "3.75rem",
        subheading: "3rem",
        tertiary: "2.25rem",
      },
      colors: {
        slate: "#8892B0",
        lightestnavy: "#233554",
        navy: "#0a192f",
        lightnavy: "#112240",
        white: "#ccd6f6",
        green: "#64ffda",
        bg1: "#112240",
        // bg2: "#2D343F",
        // dark1: "#001c22",
      },
      dropShadow: {
        "2xl": "4px 4px 0px 0px rgba(100, 255, 218, 1)",
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
