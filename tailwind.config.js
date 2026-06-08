/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: '#F5EFE6',
        linen: '#EDE4D8',
        bark: '#8B6F5E',
        soil: '#5C4033',
        moss: '#4A6741',
        fern: '#7A9E6E',
        sky: '#7BA7BC',
        mist: '#C8DDE8',
        dusk: '#2C3E35',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        caveat: ['Caveat', 'cursive'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        organic: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
