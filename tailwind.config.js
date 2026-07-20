/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      colors: {
        background: '#FAF9F6', // Very soft warm white
        foreground: '#1F1A17', // Soft off-black
        primary: {
          DEFAULT: '#B4935F', // Warm gold
          foreground: '#FFFFFF',
        },
        muted: {
          DEFAULT: '#EFEFE8',
          foreground: '#706B65',
        },
        accent: {
          DEFAULT: '#B4935F',
          foreground: '#FFFFFF',
        },
      },
      letterSpacing: {
        widest: '.2em',
      }
    },
  },
  plugins: [],
}
