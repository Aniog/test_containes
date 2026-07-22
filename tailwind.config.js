/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFCFA',
          100: '#FAF8F5',
          200: '#F5F0E6',
        },
        gold: {
          DEFAULT: '#C9A962',
          dark: '#B8860B',
          light: '#F5F0E6',
        },
        charcoal: {
          DEFAULT: '#1A1A1A',
          light: '#6B6560',
        },
        taupe: {
          DEFAULT: '#E8E4DF',
          dark: '#D4CFC7',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.15em',
        'product': '0.12em',
      },
      boxShadow: {
        'subtle': '0 2px 8px rgba(26, 26, 26, 0.04)',
        'card': '0 4px 20px rgba(26, 26, 26, 0.08)',
        'hover': '0 8px 30px rgba(26, 26, 26, 0.12)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      aspectRatio: {
        'product': '4 / 5',
        'reel': '9 / 16',
      },
    },
  },
  plugins: [],
}
