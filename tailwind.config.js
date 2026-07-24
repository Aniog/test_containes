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
          ink: '#17130F',
          espresso: '#2A2018',
          ivory: '#F8F2E9',
          porcelain: '#FFFDF8',
          sand: '#E8D9C5',
          champagne: '#C49A5A',
          gold: '#9D7441',
          taupe: '#766A5D',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        velvet: '0 24px 70px rgba(42, 32, 24, 0.12)',
        soft: '0 16px 45px rgba(42, 32, 24, 0.08)',
      },
      backgroundImage: {
        'velmora-radial': 'radial-gradient(circle at top left, rgba(196, 154, 90, 0.18), transparent 34%), linear-gradient(135deg, #2A2018 0%, #17130F 100%)',
      },
    },
  },
  plugins: [],
}
