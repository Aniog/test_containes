/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'velmora-ink': '#1d1715',
        'velmora-espresso': '#342927',
        'velmora-paper': '#f7f1e8',
        'velmora-shell': '#efe5d8',
        'velmora-gold': '#b89153',
        'velmora-gold-deep': '#8f6d37',
        'velmora-mist': '#cab9a2',
        'velmora-taupe': '#746252',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 50px rgba(29, 23, 21, 0.08)',
        velmora: '0 28px 80px rgba(29, 23, 21, 0.16)',
      },
      letterSpacing: {
        editorial: '0.24em',
      },
    },
  },
  plugins: [],
}
