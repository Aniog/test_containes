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
          ivory: '#F7F1E8',
          cream: '#FFF9F0',
          ink: '#1B2A24',
          forest: '#243B32',
          sage: '#A8B5A2',
          gold: '#B88945',
          champagne: '#E8D2AE',
          clay: '#9A6B53',
          line: '#D8C8AE',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 70px rgba(27, 42, 36, 0.10)',
        glow: '0 18px 45px rgba(184, 137, 69, 0.18)',
      },
      animation: {
        'fade-up': 'fadeUp 700ms ease-out both',
        'slow-drift': 'slowDrift 9s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slowDrift: {
          '0%': { transform: 'translateY(0) scale(1)' },
          '100%': { transform: 'translateY(-10px) scale(1.015)' },
        },
      },
    },
  },
  plugins: [],
}
