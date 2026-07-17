/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9A96E',
          dark: '#B8955A',
          light: '#D4C4A8',
        },
        charcoal: '#1A1A1A',
        cream: '#FAF8F5',
        ivory: '#FAF8F5',
        'warm-cream': '#F5F2ED',
        taupe: '#8B7E6A',
        'muted-gold': '#D4C4A8',
        'light-gray': '#E8E4DE',
        'medium-gray': '#9A948A',
        'dark-bg': '#2A2A2A',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.2em',
        'extra-wide': '0.1em',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(26, 26, 26, 0.06)',
        'lift': '0 8px 24px rgba(26, 26, 26, 0.1)',
        'premium': '0 16px 48px rgba(26, 26, 26, 0.12)',
      },
    },
  },
  plugins: [],
}
