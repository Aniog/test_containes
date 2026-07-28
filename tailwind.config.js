/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          800: '#17324f',
          900: '#0f233a',
          950: '#08192d',
        },
        steel: {
          50: '#f3f6f9',
          100: '#e6edf4',
          200: '#d4dee9',
          300: '#aebdce',
          400: '#7f91a5',
        },
        trust: {
          50: '#edf6ff',
          100: '#d9ecff',
          500: '#2f80ed',
          600: '#1f6feb',
          700: '#1756c2',
          800: '#164a9c',
        },
        harbor: {
          50: '#eaf8f6',
          100: '#cceee9',
          300: '#6bd1c1',
          700: '#12766d',
          900: '#0b4f4a',
        },
        amberline: {
          100: '#fff0cf',
          200: '#ffe29c',
          300: '#f8c75a',
          800: '#8a5a04',
        },
      },
      boxShadow: {
        card: '0 18px 45px rgba(8, 25, 45, 0.12)',
      },
    },
  },
  plugins: [],
}
