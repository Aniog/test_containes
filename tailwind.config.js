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
          champagne: '#E8D8BE',
          onyx: '#15110D',
          espresso: '#2A211A',
          gold: '#B88945',
          antique: '#8A642D',
          clay: '#A67058',
          mist: '#EFE6DA',
          stone: '#756A60',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'velmora-soft': '0 18px 60px rgba(21, 17, 13, 0.10)',
        'velmora-deep': '0 24px 80px rgba(21, 17, 13, 0.30)',
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
