/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        velmora: {
          ink: '#17120E',
          brown: '#30231A',
          cream: '#F7F0E7',
          stone: '#E8DDD0',
          champagne: '#C7A46B',
          gold: '#A9793A',
          blush: '#EFE1D6',
          muted: '#776A5F',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
