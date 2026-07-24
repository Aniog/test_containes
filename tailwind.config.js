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
          ink: '#241a13',
          pearl: '#f7f2ea',
          mist: '#ede3d6',
          gold: '#c19a6b',
          sand: '#d7c3ab',
          cocoa: '#6f5946',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 45px rgba(36, 26, 19, 0.08)',
      },
    },
  },
  plugins: [],
}
