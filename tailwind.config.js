/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velmora: {
          espresso: '#211A16',
          ink: '#2F2722',
          cream: '#F7F1E8',
          ivory: '#FFFDF8',
          sand: '#E8DCCB',
          taupe: '#B69E86',
          gold: '#B98343',
          champagne: '#D8B984',
          blush: '#E9D8CF',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        luxury: '0.24em',
        editorial: '0.16em',
      },
      boxShadow: {
        soft: '0 22px 70px rgba(33, 26, 22, 0.10)',
        glow: '0 16px 45px rgba(185, 131, 67, 0.18)',
      },
    },
  },
  plugins: [],
}
