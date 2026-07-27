/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B2A4A',
          foreground: '#FFFFFF',
        },
        accent: {
          DEFAULT: '#1E5F9E',
          foreground: '#FFFFFF',
        },
        cta: {
          DEFAULT: '#F59E0B',
          foreground: '#1A1A1A',
        },
        background: '#F7F9FC',
        foreground: '#0F1B2D',
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#0F1B2D',
        },
        muted: {
          DEFAULT: '#E8EDF3',
          foreground: '#5A6B7E',
        },
        border: '#D7DEE8',
        success: '#15803D',
        warning: '#B45309',
        danger: '#B91C1C',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '7xl': '1280px',
      },
    },
  },
  plugins: [],
}
