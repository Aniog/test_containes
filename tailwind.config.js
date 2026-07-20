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
          cocoa: '#2b211d',
          ivory: '#f7f0e6',
          pearl: '#fffaf2',
          sand: '#eadfce',
          champagne: '#d9b878',
          gold: '#b98a3a',
          taupe: '#6d5b50',
          mist: '#d8cab8',
          rose: '#8f5d4c',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 80px rgba(23, 17, 15, 0.12)',
        glow: '0 18px 50px rgba(217, 184, 120, 0.22)',
      },
      letterSpacing: {
        widestLuxury: '0.26em',
      },
    },
  },
  plugins: [],
}
