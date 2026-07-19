/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velmora: {
          espresso: '#1f1714',
          ink: '#2b211d',
          taupe: '#75675f',
          gold: '#b8894a',
          'gold-deep': '#8f6531',
          champagne: '#efe4d2',
          ivory: '#fbf7ef',
          rose: '#d9b7a3',
          line: '#dfd0bd',
          mist: '#f6eee3',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        editorial: '0 24px 70px rgba(31, 23, 20, 0.12)',
        glow: '0 18px 60px rgba(184, 137, 74, 0.18)',
      },
    },
  },
  plugins: [],
}
