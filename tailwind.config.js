/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        velmora: {
          noir: '#23161f',
          ink: '#32262e',
          ivory: '#f6f0e8',
          pearl: '#fffaf5',
          gold: '#d8ba82',
          mist: '#8a7871',
          line: '#dfd0c2',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cormorant Garamond', 'serif'],
      },
      boxShadow: {
        soft: '0 20px 60px rgba(35, 22, 31, 0.08)',
        card: '0 14px 34px rgba(35, 22, 31, 0.08)',
      },
      letterSpacing: {
        product: '0.32em',
        luxury: '0.18em',
      },
    },
  },
  plugins: [],
}
