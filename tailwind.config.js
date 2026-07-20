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
          ink: '#1b1512',
          cocoa: '#3a2a23',
          cream: '#f5efe6',
          porcelain: '#fffaf2',
          champagne: '#b9925e',
          blush: '#ead8ca',
          sage: '#8e917d',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 60px rgba(27, 21, 18, 0.10)',
        glow: '0 20px 80px rgba(185, 146, 94, 0.18)',
      },
      animation: {
        'fade-up': 'fadeUp 700ms ease-out both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
