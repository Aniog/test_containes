/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core palette
        'velvet': {
          50: '#faf9f7',
          100: '#f5f3ef',
          200: '#ebe7df',
          300: '#dbd5c8',
          400: '#c4baa8',
          500: '#a89d8a',
          600: '#8c8070',
          700: '#6e6458',
          800: '#504a40',
          900: '#2c2824',
          950: '#1a1714',
        },
        // Gold accent
        'gold': {
          50: '#fefcf5',
          100: '#fdf8e7',
          200: '#faefc4',
          300: '#f6e09a',
          400: '#f0cd6b',
          500: '#e8b84a',
          600: '#d4a03a',
          700: '#b08030',
          800: '#8c662c',
          900: '#6e5227',
          DEFAULT: '#d4a03a',
        },
        // Warm cream background
        'cream': {
          50: '#fefdfb',
          100: '#fdfaf5',
          200: '#fbf6ec',
          300: '#f7f0e0',
          DEFAULT: '#fdfaf5',
        },
        // Semantic
        'foreground': '#1a1714',
        'background': '#fdfaf5',
        'card': '#ffffff',
        'card-foreground': '#1a1714',
        'muted': '#f5f3ef',
        'muted-foreground': '#6e6458',
        'accent': '#d4a03a',
        'accent-foreground': '#1a1714',
        'border': '#ebe7df',
        'ring': '#d4a03a',
      },
      fontFamily: {
        'serif': ['"Cormorant Garamond"', 'Georgia', 'Cambria', 'serif'],
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.05', letterSpacing: '0.04em' }],
        'heading-1': ['3rem', { lineHeight: '1.1', letterSpacing: '0.03em' }],
        'heading-2': ['2.25rem', { lineHeight: '1.15', letterSpacing: '0.025em' }],
        'heading-3': ['1.5rem', { lineHeight: '1.2', letterSpacing: '0.02em' }],
        'overline': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.2em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(26, 23, 20, 0.07), 0 10px 20px -2px rgba(26, 23, 20, 0.04)',
        'lifted': '0 8px 30px -5px rgba(26, 23, 20, 0.1)',
      },
      transitionDuration: {
        '350': '350ms',
        '400': '400ms',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-out-right': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.3s ease-out forwards',
        'slide-out-right': 'slide-out-right 0.3s ease-out forwards',
      },
    },
  },
  plugins: [],
}
