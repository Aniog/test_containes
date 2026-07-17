/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        velmora: {
          ivory: '#f6f0e8',
          stone: '#ede3d6',
          champagne: '#d9ba83',
          taupe: '#8c7663',
          ink: '#2f241f',
          espresso: '#1d1714',
          line: '#d7cab9',
          muted: '#6f5d50',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 55px rgba(61, 47, 39, 0.08)',
      },
    },
  },
  plugins: [],
}
