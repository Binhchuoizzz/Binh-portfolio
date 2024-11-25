const { DEFAULT_RUNTIME_WEBPACK } = require("next/dist/shared/lib/constants");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      centered: "true",
      padding: "15px",
    },
    screen: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      primary: "var(--font-bebas)",
      secondary: "var(--font-inter)",
    },
    extend: {
      colors: {
        primary: "#10151f",
        secondary: "#202e42",
        accent: {
          DEFAULT: "#dcbd54",
          hover: "#edf09c",
        },
      },
      boxShadow: {
        DEFAULT: "0px 14px 54px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
