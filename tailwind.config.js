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
          ink: '#17110f',
          espresso: '#2a1d18',
          cream: '#f7f0e6',
          pearl: '#fffaf2',
          champagne: '#c8a45d',
          antique: '#8f6b2e',
          cocoa: '#4a342c',
          mist: '#dfd1bf',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        editorial: '0 24px 80px rgba(42, 29, 24, 0.14)',
        glow: '0 18px 60px rgba(200, 164, 93, 0.22)',
      },
    },
  },
  plugins: [],
}
