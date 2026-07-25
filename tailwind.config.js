/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF9F6', // Soft warm white/cream
        foreground: '#2C2B29', // Deep charcoal/off-black for text
        border: '#EAE6DF', // Added explicitly for border-border to work
        primary: {
          DEFAULT: '#B89B72', // Warm muted gold
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#EAE6DF', // Light cream for secondary backgrounds
          foreground: '#4A4845', // Lighter charcoal
        },
        accent: {
          DEFAULT: '#4A4845', // Charcoal for buttons
          foreground: '#FFFFFF', 
        },
        muted: {
          DEFAULT: '#F4F2EE', // Very light beige for borders/dividers
          foreground: '#7D7A75', // Muted text
        },
        gold: {
          light: '#D4C3A3',
          DEFAULT: '#B89B72',
          dark: '#8C7350',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.2em',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'premium': '0 10px 40px -10px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
}
