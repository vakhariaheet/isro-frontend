/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: '#832161',
        'purple-dark': '#3D2645'
      }
    },
  },
  plugins: [],
}

