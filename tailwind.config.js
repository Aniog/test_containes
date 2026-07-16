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
          ink: '#1b1513',
          cocoa: '#3a2d29',
          ivory: '#f6f0e8',
          mist: '#efe5d9',
          sand: '#d7c8b5',
          smoke: '#8f7d70',
          gold: '#b59663',
          rose: '#c7ab97',
        },
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        heading: ['"Playfair Display"', 'serif'],
      },
      boxShadow: {
        velvet: '0 18px 50px rgba(27, 21, 19, 0.12)',
        soft: '0 10px 30px rgba(27, 21, 19, 0.08)',
      },
      letterSpacing: {
        luxe: '0.28em',
      },
    },
  },
  plugins: [],
}
