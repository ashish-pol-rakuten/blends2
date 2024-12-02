/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        akira: ['"Akira Expanded"', "normal"],
      },
      colors: {
        brand: "#20A564",
      },
    },
  },
  plugins: [],
};
