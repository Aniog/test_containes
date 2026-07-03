/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        gold: {
          50: '#FBF7F0',
          100: '#F5EDDB',
          200: '#EBD9B3',
          300: '#DFC287',
          400: '#D4B87A',
          500: '#B8944E',
          600: '#9C7A3E',
          700: '#7A5E30',
          800: '#5C4624',
          900: '#3E2F18',
        },
        warm: {
          50: '#FDFBFA',
          100: '#F8F5F0',
          200: '#F0EBE4',
          300: '#E8E2DA',
          400: '#C5BDB3',
          500: '#A3998D',
          600: '#7A6F63',
          700: '#5C544A',
          800: '#3D3832',
          900: '#2C2826',
        },
        cream: '#F8F5F0',
        ink: '#1C1C1C',
      },
      letterSpacing: {
        'wide-lg': '0.08em',
        'wide-xl': '0.12em',
        'wide-2xl': '0.16em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
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
