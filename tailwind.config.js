/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF7F2',
        charcoal: '#1C1C1C',
        taupe: '#7A6F5B',
        champagne: '#B8924A',
        'champagne-dark': '#A07F3D',
        border: '#E8E2D9',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.12em',
      },
      maxWidth: {
        container: '1280px',
      },
    },
  },
  plugins: [],
}
