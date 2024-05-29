/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Ubuntu", "sans-serif"],
        "Ubuntu-regular": ["Ubuntu-Regular", "sans-serif"],
        "Ubuntu-bold": ["Ubuntu-Bold", "sans-serif"],
        "Ubuntu-medium": ["Ubuntu-Medium", "sans-serif"],
      },
    },
  },
  plugins: [],
};
