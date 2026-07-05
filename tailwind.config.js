/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velvet: {
          50: '#f8f6f3',
          100: '#f0ece6',
          200: '#e5ddd6',
          300: '#d4c8bd',
          400: '#bfae9e',
          500: '#a89480',
          600: '#8c7864',
          700: '#6b6561',
          800: '#3d322c',
          900: '#1a1412',
        },
        gold: {
          DEFAULT: '#c9a96e',
          light: '#dfc89a',
          dark: '#b8944f',
          muted: '#d9bf8a',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.15em',
      },
    },
  },
  plugins: [],
}
