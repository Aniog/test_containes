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
          cream: '#FFFBF4',
          linen: '#E9DDCB',
          espresso: '#241914',
          mocha: '#5D463A',
          champagne: '#C8A46D',
          bronze: '#8A633E',
          rose: '#D9B8A6',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        editorial: '0 24px 70px rgba(36, 25, 20, 0.12)',
        soft: '0 16px 45px rgba(36, 25, 20, 0.08)',
      },
      animation: {
        'fade-up': 'fadeUp 700ms ease-out both',
        'soft-in': 'softIn 500ms ease-out both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        softIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
