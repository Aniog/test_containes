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
          50: '#FEFCF8',
          100: '#FDF8EE',
          200: '#FAF0D8',
          300: '#F5E3B8',
          400: '#EDCF8A',
          500: '#C9A96E',
          600: '#B8925A',
          700: '#9A7548',
          800: '#7F5E3D',
          900: '#694E34',
        },
        gold: {
          DEFAULT: '#C9A96E',
          light: '#E8D5A3',
          dark: '#A8844A',
        },
        charcoal: {
          50: '#F5F5F5',
          100: '#E8E8E8',
          200: '#D0D0D0',
          300: '#A8A8A8',
          400: '#808080',
          500: '#5C5C5C',
          600: '#3D3D3D',
          700: '#2A2A2A',
          800: '#1A1A1A',
          900: '#0F0F0F',
        },
        taupe: {
          50: '#F8F6F3',
          100: '#F0EDE8',
          200: '#E0D9CE',
          300: '#CBBFAD',
          400: '#B5A48B',
          500: '#A08D72',
          600: '#8A7560',
          700: '#735F4F',
          800: '#5F4E43',
          900: '#4F4139',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        wide: '0.08em',
        wider: '0.12em',
        widest: '0.2em',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
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
  plugins: [],
}
