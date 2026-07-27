/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#EEF2F9',
          100: '#D5E0F0',
          200: '#ABBFE1',
          400: '#5780C0',
          600: '#2A5298',
          700: '#1E3F7A',
          800: '#1B3A6B',
          900: '#0F2347',
        },
        gold: {
          100: '#FDF3DC',
          200: '#F9E4A8',
          400: '#E8B84B',
          500: '#D4A030',
          600: '#C8922A',
          700: '#A87520',
        },
        success: '#2D7D46',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 2px 12px rgba(27,58,107,0.08)',
        'card-hover': '0 8px 32px rgba(27,58,107,0.14)',
      },
    },
  },
  plugins: [],
}

