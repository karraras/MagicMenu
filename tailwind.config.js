/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
      },
      fontFamily: {
        Barlow: "Barlow Condensed",
        Bellefair: "Bellefair",
        FontAwesome: "FontAwesome",
      },
      gridTemplateColumns: {
        gtc: "repeat(auto-fill,minmax(200px,fr))",
      },
    },
  },
  plugins: [],
};
// npm run build -i
