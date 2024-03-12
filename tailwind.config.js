/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["dm_serif_textregular", "sans-serif"],
        dmSerif: ["interregular", "sans-serif"],
        workSans: ["work_sansregular", "sans-serif"],
      },
      colors: {
        green: "#474E21",
        softGreen: "#E8FD6B",
        purple: "#d2abe4",
      },
    },
  },
  plugins: [],
};
