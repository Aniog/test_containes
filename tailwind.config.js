/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#faf7f2',
        foreground: '#1a1a1a',
        muted: '#f3ede0',
        'muted-foreground': '#6d6d6d',
        accent: '#b08d4f',
        'accent-foreground': '#ffffff',
        border: '#e6d9bc',
        brand: {
          50: '#faf7f2',
          100: '#f3ede0',
          200: '#e6d9bc',
          300: '#d6bf8a',
          400: '#c6a56a',
          500: '#b08d4f',
          600: '#9a7a42',
          700: '#7d6138',
          800: '#654d32',
          900: '#54412c',
          950: '#2c2016',
        },
        ink: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',
          950: '#1a1a1a',
        }
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.25em',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fadeIn .6s ease-out forwards',
        'slide-up': 'slideUp .7s ease-out forwards',
      },
    },
  },
  plugins: [],
}
