module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      christmasFont: ["Mountains of Christmas", "cursive"],
    },
    extend: {
      colors: {
        santaRed: "#D5392C",
        santaRedSecondary: "#D5392C",
        santaGreen: "#2C8B53",
        christmasGold: "#DAB761",
        poop: "#341c02",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
