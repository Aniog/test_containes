/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        velmora: {
          ivory: '#f6f0e8',
          pearl: '#efe5d8',
          cloud: '#e5d6c6',
          ink: '#241f1d',
          mist: '#6f635d',
          gold: '#d3b27a',
          bronze: '#9b7240',
          line: '#d8c8b6',
        },
      },
      boxShadow: {
        velmora: '0 18px 40px rgba(36, 31, 29, 0.08)',
        'velmora-lg': '0 28px 70px rgba(36, 31, 29, 0.14)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cormorant Garamond', 'serif'],
      },
    },
  },
  plugins: [],
}
