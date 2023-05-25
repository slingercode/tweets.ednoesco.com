/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.tsx", "./components/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        ednoesco: {
          accent: {
            high: "hsl(53, 100%, 91%)",
            low: "hsl(48, 100%, 47.0%)",
            border: "hsl(53, 100%, 86%)",
          },
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
