/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dmSerif: ["dm_serif_textregular", "sans-serif"],
        inter: ["interregular", "sans-serif"],
        workSans: ["work_sansregular", "sans-serif"],
        workSansBold: ["work_sansbold", "sans-serif"],
        workSansMedium: ["work_sansmedium", "sans-serif"],
        workSansSemiBold: ["work_sanssemibold", "sans-serif"],
        workSansExtraBold: ["work_sansextrabold", "sans-serif"],
        workSansBlack: ["work_sansblack", "sans-serif"],
      },
      colors: {
        green: "#474E21",
        softGreen: "#E8FD6B",
        softYellow: "#F6FCD5",
        purple: "#d2abe4",
      },
    },
  },
  plugins: [],
};
