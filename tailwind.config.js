/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.tsx", "./components/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        ednoesco: {
          accent: "hsl(53, 100%, 91%)",
          primary: "hsl(256, 6%, 93.2%)",
          background: " hsl(246, 6%, 9%)",
        },
      },
      fontFamily: {
        sans: ["var(--font-berkeley)"],
      },
    },
  },
  plugins: [],
};
