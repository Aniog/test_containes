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
          DEFAULT: '#0f2540',
          50: '#e8ecf1',
          100: '#c5ceda',
          200: '#9eafc2',
          300: '#7790aa',
          400: '#587898',
          500: '#3a6086',
          600: '#2c5278',
          700: '#1e446a',
          800: '#0f2540',
          900: '#0a1a2e',
        },
        accent: {
          DEFAULT: '#e85d04',
          50: '#fef0e6',
          100: '#fdd9bf',
          200: '#fbc096',
          300: '#f9a76d',
          400: '#f78f4e',
          500: '#e85d04',
          600: '#d15404',
          700: '#ba4b03',
          800: '#a34203',
          900: '#8c3903',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        'container': '1200px',
      },
    },
  },
  plugins: [],
}
