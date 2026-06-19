/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF9F6', // Soft warm neutral
        foreground: '#1A1A1A', // Deep charcoal
        primary: {
          DEFAULT: '#B0894F', // Warm gold
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#E8E3DF', // Light greige
          foreground: '#1A1A1A',
        },
        muted: {
          DEFAULT: '#F5F5F3',
          foreground: '#737373',
        },
        accent: {
          DEFAULT: '#8C6C3E', // Darker gold for hover states
          foreground: '#FFFFFF',
        },
        border: '#E8E3DF',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}
