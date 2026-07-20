/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#d4bc8e',
          goldDark: '#bfa572',
          cream: '#fdfcfb',
          stone: '#f4f1ea',
          dark: '#1a1a1a',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
      }
    },
  },
  plugins: [],
}
EOF > tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#d4bc8e',
          goldDark: '#bfa572',
          cream: '#fdfcfb',
          stone: '#f4f1ea',
          dark: '#1a1a1a',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
      }
    },
  },
  plugins: [],
}
