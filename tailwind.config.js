/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#151618',
        ink: '#29231e',
        shell: '#f7f1ea',
        mist: '#fffdf9',
        parchment: '#e6ddd1',
        champagne: '#c6a66e',
        bronze: '#8d6d43',
        stone: '#7a6d61',
        blush: '#efe4da',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        velvet: '0 24px 80px rgba(21, 22, 24, 0.12)',
        card: '0 18px 44px rgba(21, 22, 24, 0.08)',
      },
      letterSpacing: {
        luxe: '0.22em',
      },
    },
  },
  plugins: [],
}
