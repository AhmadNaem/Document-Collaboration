/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-1': '#5FB05D',
        'green-2': '#A4D0A4',
        'green-3': '#DEFFD8',
        'yellow-3': '#fef08a',
        'red-1': '#fb7185'
      },

      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

