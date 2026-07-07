/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'velmora-ink': '#17130F',
        'velmora-ivory': '#F8F3EA',
        'velmora-pearl': '#EFE5D6',
        'velmora-linen': '#D9CBB8',
        'velmora-gold': '#B98945',
        'velmora-bronze': '#6E4C2F',
        'velmora-blush': '#B98D7A',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 70px rgba(23, 19, 15, 0.10)',
        glow: '0 18px 50px rgba(185, 137, 69, 0.22)',
      },
    },
  },
  plugins: [],
}
