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
        santaRed: "#AB2D26",
        santaRedSecondary: "#D5392C",
        santaGreen: "#093D24",
        christmasGold: "#AC9D5C",
        poop: "#341c02",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
