/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#F6F0E8',
        pearl: '#FCFAF7',
        mist: '#ECE2D7',
        sand: '#D9C4A5',
        gold: '#B38A56',
        bronze: '#7B5D39',
        ink: '#1D1916',
        bark: '#332925',
        line: '#DCCEC0',
        muted: '#6A5C52',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        luxe: '0.28em',
        caps: '0.18em',
        micro: '0.22em',
      },
      boxShadow: {
        velvet: '0 24px 70px rgba(29, 25, 22, 0.12)',
        float: '0 14px 40px rgba(29, 25, 22, 0.10)',
      },
      maxWidth: {
        content: '86rem',
      },
      transitionTimingFunction: {
        luxe: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
