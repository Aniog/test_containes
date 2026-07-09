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
          ink: '#241915',
          ivory: '#F8F1E8',
          pearl: '#FFFBF5',
          sand: '#E7D9C8',
          gold: '#C69A53',
          bronze: '#8E6238',
          cocoa: '#6F584B',
          blush: '#EED7C8',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 22px 70px rgba(36, 25, 21, 0.10)',
        editorial: '0 30px 90px rgba(36, 25, 21, 0.18)',
      },
      backgroundImage: {
        'velmora-radial': 'radial-gradient(circle at top left, rgba(198, 154, 83, 0.24), transparent 34%), linear-gradient(135deg, #241915 0%, #3A2820 48%, #1B1210 100%)',
      },
    },
  },
  plugins: [],
}
