/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'velmora-porcelain': '#F6F0E8',
        'velmora-pearl': '#FFFDF8',
        'velmora-espresso': '#241A16',
        'velmora-cocoa': '#6F5A4F',
        'velmora-champagne': '#C6A15B',
        'velmora-bronze': '#9B773D',
        'velmora-linen': '#E7DAC9',
        'velmora-oxblood': '#3A1718',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'velmora-soft': '0 18px 50px rgba(36, 26, 22, 0.08)',
        'velmora-card': '0 24px 70px rgba(36, 26, 22, 0.14)',
        'velmora-glow': '0 16px 38px rgba(198, 161, 91, 0.26)',
      },
      keyframes: {
        'velmora-fade-up': {
          '0%': { opacity: '0', transform: 'translateY(22px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'velmora-fade-up': 'velmora-fade-up 900ms ease-out both',
      },
    },
  },
  plugins: [],
}
