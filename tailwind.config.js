/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        velmora: {
          ivory: '#F7F1EA',
          pearl: '#FBF7F2',
          sand: '#D9CCBD',
          bronze: '#AE8A67',
          espresso: '#1E1816',
          umber: '#5C4D43',
          mist: '#E8DDD2',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['Manrope', 'sans-serif'],
      },
      letterSpacing: {
        velmora: '0.28em',
      },
      boxShadow: {
        velmora: '0 20px 60px rgba(30, 24, 22, 0.08)',
        'velmora-soft': '0 14px 35px rgba(30, 24, 22, 0.06)',
      },
    },
  },
  plugins: [],
}
