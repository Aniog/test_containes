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
          50: '#f0f2f5',
          100: '#d9dde5',
          200: '#b3bccc',
          300: '#8d9ab3',
          500: '#4a5570',
          700: '#2a3147',
          800: '#1a1f2e',
          900: '#111520',
        },
        brass: {
          300: '#e8d5a3',
          400: '#d4b96b',
          500: '#c8a45c',
          600: '#b08a3e',
          700: '#8f6d2e',
        },
        warm: {
          50: '#fdfcfb',
          100: '#f8f7f4',
          200: '#f0ede7',
          300: '#e5e0d8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
