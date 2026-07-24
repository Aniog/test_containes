/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F7F4F0',
        espresso: '#1E1C1A',
        stone: '#6B6560',
        taupe: '#9B9189',
        gold: {
          DEFAULT: '#C5A060',
          dark: '#B08D50',
          light: '#E6D2A8',
        },
        line: '#E4DCD4',
        charcoal: '#2A2724',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest': '0.22em',
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(30, 28, 26, 0.06)',
        'card': '0 4px 20px rgba(30, 28, 26, 0.05)',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
