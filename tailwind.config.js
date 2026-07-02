/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#1A1714',
        cream: '#FAF7F2',
        parchment: '#F2EDE4',
        gold: '#C9A96E',
        goldLight: '#E8D5A3',
        taupe: '#8C7B6B',
        hairline: '#E0D8CE',
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        manrope: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.15em',
        widest3: '0.2em',
      },
      transitionDuration: {
        400: '400ms',
        600: '600ms',
        700: '700ms',
      },
    },
  },
  plugins: [],
}
