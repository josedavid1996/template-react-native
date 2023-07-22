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
      colors: {
        primary: {
          100: '#f0f9ff',
          200: '#e0f2fe',
          300: '#bae6fd',
          400: '#7dd3fc',
          500: '#38bdf8',
          600: '#0ea5e9',
          700: '#0284c7',
          800: '#075985',
          900: '#0c4a6e',
          DEFAULT: "#0ea5e9"
        }
      }
    },
  },
  plugins: [],
}

