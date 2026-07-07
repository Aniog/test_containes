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
          espresso: '#221814',
          ivory: '#F8F3EA',
          champagne: '#EFE3D1',
          porcelain: '#FFFCF6',
          gold: '#B8894A',
          bronze: '#74512F',
          mink: '#6E5B4E',
          line: '#D8C7AE',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        velvet: '0 24px 80px rgba(34, 24, 20, 0.12)',
        soft: '0 18px 50px rgba(34, 24, 20, 0.08)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 700ms ease-out both',
      },
    },
  },
  plugins: [],
}
