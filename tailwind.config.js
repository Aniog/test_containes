/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'velmora-ivory': '#F8F4EF',
        'velmora-rose': '#E7DDD1',
        'velmora-sand': '#D8C6B2',
        'velmora-gold': '#B99267',
        'velmora-gold-deep': '#8F6A45',
        'velmora-mocha': '#6D5A4D',
        'velmora-noir': '#27201D',
        'velmora-ink': '#1E1A1A',
      },
      boxShadow: {
        velmora: '0 20px 60px rgba(39, 32, 29, 0.08)',
        'velmora-soft': '0 10px 30px rgba(39, 32, 29, 0.06)',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
