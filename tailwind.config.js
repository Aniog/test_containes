/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FDFBF7',
        foreground: '#111111',
        card: '#FFFFFF',
        'card-foreground': '#111111',
        primary: '#C5A572',
        'primary-foreground': '#FFFFFF',
        secondary: '#F5F3F0',
        'secondary-foreground': '#111111',
        muted: '#F5F3F0',
        'muted-foreground': '#7A7267',
        accent: '#C5A572',
        'accent-foreground': '#FFFFFF',
        border: '#E8E4DE',
        input: '#E8E4DE',
        ring: '#C5A572',
        gold: '#C5A572',
        'gold-light': '#D4BC96',
        'gold-dark': '#8B7355',
        stone: {
          50: '#FAF9F7',
          100: '#F5F3F0',
          200: '#E8E4DE',
          300: '#D1CBC2',
          400: '#A8A196',
          500: '#7A7267',
          600: '#5C554C',
          700: '#3D372F',
          800: '#2A2520',
          900: '#1A1612',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-right': 'slideRight 0.3s ease-out',
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
        slideRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
