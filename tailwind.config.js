/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#4C40F7",
        accent: "#DE5B6D",
        headline: "#111029",
        paragraph: "#555555",
        back: "#F5F3FE",
        gold: "#FFC047",
      },
      width: {
        82: "width : 21rem",
        pertiga: "32%",
        setengah: "48%",
        "setengah-1": "45%",
      },
      fontFamily: {
        inter: ["'Inter'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
