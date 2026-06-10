/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E3A5F',
          50: '#E8EDF3',
          100: '#C5D1E3',
          200: '#9FB3D1',
          300: '#7995BF',
          400: '#5377AD',
          500: '#1E3A5F',
          600: '#182E4D',
          700: '#12233B',
          800: '#0C1729',
          900: '#060C17',
        },
        secondary: {
          DEFAULT: '#F97316',
          50: '#FFF4EC',
          100: '#FFE4CC',
          200: '#FFC9A3',
          300: '#FFAE7A',
          400: '#FF9351',
          500: '#F97316',
          600: '#CC5C12',
          700: '#993F0D',
          800: '#662308',
          900: '#331204',
        },
        accent: {
          DEFAULT: '#10B981',
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
