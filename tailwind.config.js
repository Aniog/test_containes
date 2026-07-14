/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        foreground: '#1a1a1a',
        primary: {
          DEFAULT: '#1a1a1a',
          foreground: '#ffffff',
        },
        brand: {
          gold: '#D4AF37',
          beige: '#F9F6F1',
          dark: '#0f0f0f',
        },
        accent: {
          DEFAULT: '#D4AF37',
          foreground: '#ffffff',
        },
        muted: {
          DEFAULT: '#f5f5f5',
          foreground: '#737373',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
    },
  },
  plugins: [],
}
