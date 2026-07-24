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
          ivory: '#f7f2ea',
          champagne: '#efe3d3',
          gold: '#b99658',
          espresso: '#3b2c26',
          cream: '#f9f4ed',
          line: '#ccb394',
          mist: '#d9c7b0',
          pine: '#4a5447',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        velmora: '0 24px 60px rgba(27, 21, 19, 0.12)',
        soft: '0 12px 30px rgba(27, 21, 19, 0.08)',
      },
      letterSpacing: {
        luxe: '0.35em',
      },
      transitionTimingFunction: {
        luxe: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      backgroundImage: {
        'velmora-radial': 'radial-gradient(circle at top, rgba(249, 244, 237, 0.16), transparent 55%)',
      },
    },
  },
  plugins: [],
}
