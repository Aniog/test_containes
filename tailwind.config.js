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
          ink: '#241c17',
          espresso: '#33271f',
          ivory: '#f8f3eb',
          porcelain: '#fffaf2',
          champagne: '#efe2ce',
          gold: '#c79a4b',
          bronze: '#9c7034',
          taupe: '#76675b',
          line: '#ded0bd',
          rose: '#b68472',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        editorial: '0 24px 70px rgba(51, 39, 31, 0.12)',
        soft: '0 16px 45px rgba(51, 39, 31, 0.09)',
      },
      letterSpacing: {
        luxe: '0.18em',
        widerluxe: '0.24em',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 700ms ease-out both',
        slideIn: 'slideIn 350ms ease-out both',
      },
    },
  },
  plugins: [],
}
