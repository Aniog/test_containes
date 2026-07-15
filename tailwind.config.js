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
          50: '#f7f6f3',
          100: '#eeece6',
          200: '#ddd7cc',
          300: '#c9bfad',
          400: '#b5a58e',
          500: '#a59178',
          600: '#967f68',
          700: '#7d6957',
          800: '#66564a',
          900: '#53473e',
          950: '#2c2520',
        },
        gold: {
          50: '#fdf8ed',
          100: '#f9edcc',
          200: '#f2d990',
          300: '#ebc155',
          400: '#e6aa2f',
          500: '#d48e1f',
          600: '#b76d18',
          700: '#964e18',
          800: '#7a3d1a',
          900: '#65331a',
          950: '#3a1a0b',
        },
        cream: {
          50: '#fefcf5',
          100: '#fdf7e7',
          200: '#f9edc9',
          300: '#f4dfa1',
          400: '#edc96e',
          500: '#e6b03f',
          600: '#d99928',
          700: '#b4791d',
          800: '#8f5f1d',
          900: '#744e1c',
          950: '#3e290c',
        },
        ink: {
          DEFAULT: '#1a1a1a',
          light: '#2d2d2d',
          lighter: '#6b6b6b',
          muted: '#a3a3a3',
          border: '#e5e5e5',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        wide: '0.08em',
        wider: '0.12em',
        widest: '0.2em',
      },
    },
  },
  plugins: [],
}
