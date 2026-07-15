/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        cream: '#FAF8F5',
        'cream-dark': '#F5F0EB',
        'text-primary': '#0D0D0D',
        'text-body': '#2A2A2A',
        'text-muted': '#8A7F75',
        'accent-gold': '#C9A96E',
        'accent-gold-hover': '#B8944F',
        'border-light': '#E5DDD4',
        'border-medium': '#D4C9BC',
        'bg-dark': '#1A1410',
        taupe: '#6B5E50',
        'star-gold': '#D4A853',
      },
      letterSpacing: {
        'widest': '0.2em',
        'wider': '0.15em',
      },
    },
  },
  plugins: [],
}
