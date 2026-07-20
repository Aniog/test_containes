/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF9F6', // Soft off-white
        foreground: '#1C1918', // Deep near-black charcoal
        primary: {
          DEFAULT: '#B89B66', // Warm muted gold
          foreground: '#FAF9F6',
        },
        secondary: {
          DEFAULT: '#E8E4D8', // Light beige/taupe
          foreground: '#1C1918',
        },
        muted: {
          DEFAULT: '#F2EFEB',
          foreground: '#595552',
        },
        accent: {
          DEFAULT: '#8C744A', // Darker gold for hover/accents
          foreground: '#FAF9F6',
        },
        border: '#E8E4D8',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.15em',
      }
    },
  },
  plugins: [],
}
