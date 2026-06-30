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
          ink: '#241611',
          porcelain: '#fbf6ee',
          champagne: '#efe3d0',
          gold: '#c49a4f',
          cocoa: '#6f5548',
          blush: '#e7cfc2',
          pearl: '#fffaf3',
          moss: '#3a3a2a',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        velvet: '0 24px 80px rgba(36, 22, 17, 0.14)',
        soft: '0 18px 50px rgba(36, 22, 17, 0.08)',
      },
      letterSpacing: {
        luxe: '0.22em',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 700ms ease-out both',
      },
    },
  },
  plugins: [],
}
