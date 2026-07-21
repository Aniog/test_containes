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
          ivory: '#F8F3EA',
          porcelain: '#FFFBF5',
          espresso: '#241812',
          cacao: '#5B4134',
          champagne: '#C49A5A',
          antique: '#8A5E2A',
          rose: '#E8D8C7',
          onyx: '#120D0A',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        velmora: '0 24px 70px rgba(36, 24, 18, 0.10)',
        glow: '0 18px 50px rgba(196, 154, 90, 0.22)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(18px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
