/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  // darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: ['poppins'],
        poppinsThin: ['poppins-thin'],
        poppinsMedium: ['poppins-medium'],
        poppinsSemiBold: ['poppins-semibold'],
        poppinsBold: ['poppins-bold'],
        lumanosimo: ['lumanosimo'],
      },
    },
  },
  plugins: [],
}

