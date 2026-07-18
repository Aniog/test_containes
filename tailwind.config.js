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
          ivory: '#F7F1E8',
          cream: '#FFF9F0',
          linen: '#E8D9C2',
          sand: '#C9AA7D',
          gold: '#B98B45',
          espresso: '#231A16',
          cocoa: '#4A342C',
          rose: '#A76758',
          mist: '#F1E7D8',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        editorial: '0 24px 70px rgba(35, 26, 22, 0.10)',
        soft: '0 12px 36px rgba(35, 26, 22, 0.08)',
      },
      letterSpacing: {
        luxe: '0.18em',
      },
    },
  },
  plugins: [],
}
