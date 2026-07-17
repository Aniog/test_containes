/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        velvet: {
          DEFAULT: '#0a0a0a',
          50: '#f5f0eb',
          100: '#e8e0d7',
          200: '#c9b89e',
          300: '#a09890',
          400: '#7a7068',
          500: '#5a5248',
          600: '#3a342e',
          700: '#2a2a2a',
          800: '#1a1a1a',
          900: '#141414',
          950: '#0a0a0a',
        },
        gold: {
          DEFAULT: '#c9a96c',
          light: '#d4b87a',
          muted: '#a08050',
          dark: '#8a6c3a',
        },
      },
      letterSpacing: {
        'wide-08': '0.08em',
        'wide-12': '0.12em',
        'wide-15': '0.15em',
      },
      transitionDuration: {
        '400': '400ms',
        '500': '500ms',
      },
    },
  },
  plugins: [],
}
