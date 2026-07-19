/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF7F2',
        'ivory-dark': '#F2EDE4',
        espresso: '#1A1208',
        'espresso-light': '#3D2E1E',
        gold: '#C4973A',
        'gold-light': '#D4AA5A',
        'gold-pale': '#EDD9A3',
        stone: '#8C7B6B',
        'stone-light': '#B5A898',
        charcoal: '#2C2416',
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.15em',
        widest3: '0.2em',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
}
