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
          50: '#E8EDF3',
          100: '#C5D1E3',
          200: '#8FA3C7',
          300: '#5975AB',
          400: '#2E4F7E',
          500: '#0F2B46',
          600: '#0D243C',
          700: '#0A1C2F',
          800: '#071422',
          900: '#040C15',
        },
        gold: {
          50: '#FBF6EC',
          100: '#F5E9CC',
          200: '#EBD399',
          300: '#E1BD66',
          400: '#D4A853',
          500: '#C49338',
          600: '#A47A2D',
          700: '#846122',
          800: '#644818',
          900: '#442F0E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
