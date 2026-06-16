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
          900: '#0F1B2D',
          800: '#1A2332',
          700: '#243044',
          600: '#2E3D56',
        },
        steel: {
          500: '#2E6BA6',
          400: '#4A85BF',
          300: '#6FA0D4',
        },
        gold: {
          500: '#C8963E',
          400: '#D4A85C',
          300: '#E0BC7E',
        },
        slate: {
          50: '#F7F8FA',
          100: '#ECEEF2',
          200: '#E2E6ED',
          400: '#8A95A7',
          500: '#5A6577',
          600: '#3D4A5C',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
