/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        velmora: {
          cream: '#f7f2ea',
          sand: '#ebe2d6',
          line: '#d8ccbe',
          stone: '#a3927d',
          muted: '#6d6256',
          gold: '#d8b36a',
          ink: '#171310',
          panel: '#241d18',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.28em',
        product: '0.18em',
        logo: '0.35em',
      },
      boxShadow: {
        soft: '0 18px 45px rgba(23, 19, 16, 0.08)',
        lift: '-16px 0 42px rgba(23, 19, 16, 0.18)',
      },
      transitionTimingFunction: {
        velvet: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      borderRadius: {
        panel: '2rem',
        stage: '2.5rem',
      },
    },
  },
  plugins: [],
}
