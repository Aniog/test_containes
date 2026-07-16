/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FBF7F2',
        stone: '#F3EDE6',
        border: '#E6DFD3',
        charcoal: '#1E1B18',
        taupe: '#8C857C',
        espresso: '#5C3D2E',
        gold: '#8B6914',
        amber: '#C4956A',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        wide: '0.15em',
        wider: '0.25em',
      },
    },
  },
  plugins: [],
}
