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
        gold: '#B8935A',
        'gold-light': '#D4AF7A',
        'gold-pale': '#EDD9B0',
        stone: '#8C7B6B',
        'stone-light': '#C4B5A5',
        'stone-pale': '#E8E0D6',
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
        'ultra-wide': '0.3em',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
}
