/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#023B5D",
        secondary: "#1391DC",
      },
      backgroundImage: {
        branch: "url('/src/assets/images/branch.png')",
      },
    },
  },
  plugins: [],
};
