/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      'heading-primary': ['4rem', { fontWeight: '500' }], /* m83px */
      'subheading': ['1rem', { fontWeight: '300' }], /* l24px */
      'heading-secondary': ['2rem', { fontWeight: '500' }], /* m50px */
      'input': ['1rem', { fontWeight: '300' }], /* l29px */
      'btn': ['0.9rem', { fontWeight: '300' }], /* l29px */
      'auth-text': ['1.375rem', { fontWeight: '400' }], /* r22px */
      'signin-text': ['1rem', { fontWeight: '400' }], /* r26px */
      'terms-agreement': ['0.75rem', { fontWeight: '400' }] /* r20px */
      /* fontWeight: light-300, regular-400, medium-500, bold-700 */
      /* width:1728/2=864, height:1117/2=558.5 */
    },
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
      'space-grotsek': ['Space Grotesk']
    }
  },
  plugins: [],
}

