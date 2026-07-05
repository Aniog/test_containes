/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        velmora: {
          pearl: '#f7f3ec',
          mist: '#fdfbf7',
          ivory: '#f2eadf',
          line: '#dccfbc',
          sand: '#d3c3ad',
          taupe: '#867561',
          gold: '#b88a44',
          espresso: '#231815',
          ink: '#362b25',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 45px rgba(35, 24, 21, 0.08)',
        card: '0 12px 30px rgba(35, 24, 21, 0.06)',
      },
      letterSpacing: {
        brand: '0.35em',
        product: '0.28em',
        overline: '0.18em',
      },
      borderRadius: {
        panel: '1.5rem',
      },
    },
  },
  plugins: [],
}
