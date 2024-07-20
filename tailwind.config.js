/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple': '#832161',
        'purple-dark': '#3D2645',
        'gray-light': '#E6E6E6',
        'gray-medium': '#D9D9D9',
        'gray': '#CACACA',
        'gray-dark': '#949494',
        'off-white': '#F0EFF4' // bg color
      }
    }, fontFamily: {
      spaceGrotsek: ['Space Grotesk']
    }
  },
  plugins: [],
}

