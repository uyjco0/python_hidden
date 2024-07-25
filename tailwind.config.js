/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "duck-red": {
          DEFAULT: "#e37151",
          light: "#eeaa97",
        },
        "duck-green": {
          DEFAULT: "#5b9e4d",
          light: "#adcfa6",
        },
        "duck-yellow": "#fbe3c1",
        "duck-blue": {
          DEFAULT: "#00278e",
          light: "#e6e9f4",
        },
      },
    },
  },
  plugins: [],
};
