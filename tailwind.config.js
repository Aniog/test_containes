/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'velmora-ink': '#161312',
        'velmora-espresso': '#221B19',
        'velmora-parchment': '#F5F0E8',
        'velmora-porcelain': '#FBF8F3',
        'velmora-taupe': '#A79284',
        'velmora-truffle': '#6B5A52',
        'velmora-gold': '#B8955D',
        'velmora-champagne': '#E3D2B0',
        'velmora-line': '#DED3C4',
        'velmora-line-dark': '#3D312D',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cormorant Garamond', 'serif'],
      },
      boxShadow: {
        soft: '0 18px 50px rgba(34, 27, 25, 0.08)',
      },
      letterSpacing: {
        product: '0.22em',
      },
    },
  },
  plugins: [],
}
