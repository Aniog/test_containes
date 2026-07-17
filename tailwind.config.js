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
          ink: '#201913',
          umber: '#2F241B',
          ivory: '#F8F3EC',
          parchment: '#EFE4D6',
          porcelain: '#FFFDF8',
          gold: '#B88A44',
          'soft-gold': '#D8BB7D',
          clay: '#A46E5C',
          taupe: '#7D7167',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 60px rgba(47, 36, 27, 0.10)',
        glow: '0 18px 50px rgba(184, 138, 68, 0.18)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out both',
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
