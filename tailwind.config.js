/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'velmora-ink': '#1f1915',
        'velmora-cocoa': '#3b2d25',
        'velmora-pearl': '#f8f3eb',
        'velmora-champagne': '#c79a55',
        'velmora-linen': '#eee4d6',
        'velmora-mist': '#ded2c2',
        'velmora-rose': '#d8b7a3',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 16px 50px rgba(31, 25, 21, 0.10)',
        card: '0 18px 45px rgba(31, 25, 21, 0.08)',
        luxe: '0 28px 80px rgba(31, 25, 21, 0.18)',
      },
      keyframes: {
        'rise-soft': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'rise-soft': 'rise-soft 850ms ease-out both',
        'fade-in': 'fade-in 420ms ease-out both',
      },
    },
  },
  plugins: [],
}
