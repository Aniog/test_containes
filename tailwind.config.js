/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '2.5rem',
      },
    },
    extend: {
      colors: {
        velmora: {
          pearl: '#f6f1ea',
          mist: '#ebe3d8',
          sand: '#d7c2a3',
          gold: '#b99263',
          rose: '#7a5b55',
          truffle: '#5e4b42',
          ink: '#211b18',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 18px 40px rgba(33, 27, 24, 0.08)',
        card: '0 12px 30px rgba(33, 27, 24, 0.07)',
      },
      transitionTimingFunction: {
        velmora: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
