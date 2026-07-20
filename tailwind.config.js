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
          ivory: '#F7F1E8',
          champagne: '#E9DAC5',
          espresso: '#2A1712',
          cocoa: '#4B332A',
          taupe: '#7A675B',
          gold: '#B9894B',
          stone: '#D7C7B5',
          pearl: '#FFF9F0',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        velvet: '0 24px 70px rgba(42, 23, 18, 0.12)',
        soft: '0 14px 45px rgba(42, 23, 18, 0.08)',
      },
    },
  },
  plugins: [],
}
