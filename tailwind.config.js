/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'velmora-bg': '#F5F0EB',
        'velmora-bg-dark': '#1A1512',
        'velmora-gold': '#C9A96E',
        'velmora-gold-light': '#E8D5B5',
        'velmora-gold-dark': '#B8924E',
        'velmora-text': '#1A1512',
        'velmora-text-light': '#F5F0EB',
        'velmora-muted': '#8B7E74',
        'velmora-border': '#E5DCD4',
        'velmora-card': '#FFFFFF',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-plus': '0.2em',
      },
    },
  },
  plugins: [],
}
