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
        foreground: '#2C2B2A', // Deep charcoal/brown for text
        primary: {
          DEFAULT: '#9C7A4A', // Warm metallic gold accent
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#EFECE6', // Soft secondary background
          foreground: '#2C2B2A',
        },
        border: '#E8E5DF', // Subtle warm border
        muted: {
          DEFAULT: '#F3F1ED',
          foreground: '#706D67',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      }
    },
  },
  plugins: [],
}
