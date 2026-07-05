/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        velmora: {
          espresso: '#221a17',
          mocha: '#332725',
          ivory: '#f6f0e8',
          sand: '#ece1d4',
          gold: '#b89259',
          'gold-deep': '#8d6b3d',
          cream: '#f8f2ea',
          ink: '#241b18',
          mute: '#78685f',
          line: '#d7c5b3',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cormorant Garamond', 'serif'],
      },
      letterSpacing: {
        logo: '0.4em',
        editorial: '0.08em',
        eyebrow: '0.32em',
        product: '0.28em',
      },
      boxShadow: {
        velvet: '0 30px 80px rgba(36, 27, 24, 0.12)',
      },
    },
  },
  plugins: [],
}
