/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#f6f4f0',
        surface: '#ffffff',
        'surface-warm': '#f1ece4',
        text: '#1c1917',
        'text-secondary': '#78716c',
        accent: '#b8860b',
        'accent-soft': '#d4af37',
        border: '#e7e5e4',
        'border-soft': '#eae6df',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0.05))',
      },
    },
  },
  plugins: [],
}
