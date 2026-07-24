/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fdf8f6',
          100: '#f7efe9',
          200: '#eddcd3',
          300: '#e0c8b8',
          400: '#d4a98c',
          500: '#c08b68',
          600: '#a87252',
          700: '#8a5a3f',
          800: '#6b4532',
          900: '#4a2f22',
          950: '#2c1a13',
        },
        gold: {
          50: '#fbf8f1',
          100: '#f5efd8',
          200: '#ebdcb0',
          300: '#dfc680',
          400: '#d4af5c',
          500: '#c9a24a',
          600: '#b08a3a',
          700: '#8c6d2e',
          800: '#6b5424',
          900: '#4a3b1a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'soft': '0 10px 30px -12px rgba(0, 0, 0, 0.08)',
        'soft-lg': '0 20px 50px -14px rgba(0, 0, 0, 0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
