/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FAF8F5',
          100: '#F5F1EB',
          200: '#EDE6DB',
          300: '#E2D5C3',
        },
        charcoal: {
          50: '#F5F5F5',
          100: '#E8E8E8',
          200: '#D1D1D1',
          300: '#B3B3B3',
          400: '#8C8C8C',
          500: '#666666',
          600: '#4A4A4A',
          700: '#333333',
          800: '#1F1F1F',
          900: '#0F0F0F',
        },
        gold: {
          50: '#FDF9F0',
          100: '#F9EFC7',
          200: '#F2D98F',
          300: '#EBC357',
          400: '#D4A84B',
          500: '#C49538',
          600: '#A87A2E',
          700: '#8A5F24',
          800: '#6F4B1F',
          900: '#5A3D19',
        },
        accent: {
          DEFAULT: '#C49538',
          light: '#D4A84B',
          dark: '#8A5F24',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
      },
    },
  },
  plugins: [],
}
