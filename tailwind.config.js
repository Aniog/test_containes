/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'velmora-ivory': '#f8f3ec',
        'velmora-cream': '#fdf9f4',
        'velmora-rose': '#efe4db',
        'velmora-gold': '#b08b57',
        'velmora-mocha': '#7a6450',
        'velmora-ink': '#2f241d',
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        display: ['Cormorant Garamond', 'serif'],
      },
      boxShadow: {
        velmora: '0 22px 70px rgba(47, 36, 29, 0.08)',
        soft: '0 12px 36px rgba(47, 36, 29, 0.06)',
      },
      letterSpacing: {
        velmora: '0.28em',
        editorial: '0.18em',
      },
    },
  },
  plugins: [],
}
