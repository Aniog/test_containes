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
          50: '#faf6f1',
          100: '#f0e6d3',
          200: '#e0cba8',
          300: '#d0af7d',
          400: '#c09352',
          500: '#b08030',
          600: '#8d6626',
          700: '#6a4c1d',
          800: '#473313',
          900: '#24190a',
        },
        dark: {
          50: '#f5f5f1',
          100: '#e0ded8',
          200: '#c2bfb5',
          300: '#a39f92',
          400: '#85806f',
          500: '#6a6554',
          600: '#545042',
          700: '#3e3b30',
          800: '#28261e',
          900: '#12110d',
        },
        cream: {
          50: '#fefcf8',
          100: '#fdf8ef',
          200: '#faf0d8',
          300: '#f5e2b5',
          400: '#efd08a',
          500: '#e8bc5e',
          600: '#d4a33e',
          700: '#b08233',
          800: '#8e662b',
          900: '#745326',
        },
        gold: {
          50: '#fdf8ef',
          100: '#f9edd3',
          200: '#f3d9a5',
          300: '#edc577',
          400: '#e7b149',
          500: '#d49a2f',
          600: '#b07e27',
          700: '#8c641f',
          800: '#684a17',
          900: '#44300f',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        wide: '0.05em',
        wider: '0.1em',
        widest: '0.15em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
