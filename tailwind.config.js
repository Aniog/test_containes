/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        ivory: {
          50:  '#FBF8F2',
          100: '#F6F1E8',
          200: '#EFE7D6',
          300: '#E4D8BD',
        },
        ink: {
          900: '#0F0C09',
          800: '#1B1612',
          700: '#2A221B',
          600: '#3B3128',
          500: '#5A4A3D',
        },
        gold: {
          50:  '#FBF5E9',
          100: '#F1E2C0',
          200: '#E0C68B',
          300: '#C9A861',
          400: '#B08D57',
          500: '#9A7541',
          600: '#7C5C30',
          700: '#5E4523',
        },
        cocoa: '#2A1F18',
      },
      letterSpacing: {
        widest2: '0.22em',
        display: '0.22em',
        editorial: '0.18em',
      },
      boxShadow: {
        soft: '0 8px 30px -12px rgba(27, 22, 18, 0.18)',
        card: '0 1px 0 rgba(27,22,18,0.04), 0 12px 28px -18px rgba(27,22,18,0.18)',
        ring: '0 0 0 1px rgba(176,141,87,0.35)',
      },
      transitionTimingFunction: {
        luxe: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
