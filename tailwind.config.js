/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF9F6', // Warm, editorial neutral
        foreground: '#1A1A1A', // Sharp, modern black
        primary: {
          DEFAULT: '#1A1A1A',
          foreground: '#FAF9F6',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#E5C158',
          dark: '#B8860B',
        },
        muted: {
          DEFAULT: '#666666',
          foreground: '#999999',
        },
        border: '#E5E5E5',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        premium: '0.15em',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
