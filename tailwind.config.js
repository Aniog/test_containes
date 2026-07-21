/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'warm-black': '#1A1714',
        'warm-charcoal': '#2C2825',
        'cream': '#FAF7F2',
        'ivory': '#F5F0E8',
        'sand': '#E8DFD1',
        'gold': '#C9A96E',
        'gold-light': '#D4BA8A',
        'gold-dark': '#A8894F',
        'text-primary': '#1A1714',
        'text-secondary': '#6B6560',
        'text-light': '#FAF7F2',
        'text-muted': '#9B9590',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
        'super-wide': '0.2em',
        'extra-wide': '0.15em',
        'wide': '0.12em',
      },
    },
  },
  plugins: [],
}
