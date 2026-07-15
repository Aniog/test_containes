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
          50: '#FDFBF7',
          100: '#FBF7EF',
          200: '#F5EDDC',
          300: '#EDE0C4',
          400: '#E0CFA5',
          500: '#D4BD87',
          600: '#C4A76A',
          700: '#B08D4A',
          800: '#93733A',
          900: '#7A5F30',
        },
        warm: {
          50: '#FDF9F5',
          100: '#FBF2E8',
          200: '#F6E2CC',
          300: '#EDCDAA',
          400: '#E2B483',
          500: '#D49D5F',
          600: '#C4863F',
          700: '#A46C30',
          800: '#885829',
          900: '#704925',
        },
        charcoal: {
          50: '#F5F4F3',
          100: '#E8E6E2',
          200: '#D1CECA',
          300: '#B5B1AB',
          400: '#959089',
          500: '#7A7570',
          600: '#635F5B',
          700: '#514D4A',
          800: '#3D3A37',
          900: '#2A2725',
          950: '#1A1816',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.15em',
        widest2: '0.2em',
        widest3: '0.3em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
