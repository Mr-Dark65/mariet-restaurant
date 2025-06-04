/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Gill Sans"', 'GillSans', 'Trebuchet MS', 'sans-serif'],
      },
    },
    animation: {
      'fade-up': 'fade-up 0.8s ease-out forwards',
    },
  },
  plugins: [],
} 