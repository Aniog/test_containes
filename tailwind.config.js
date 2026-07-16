/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'velmora-bg': '#FDFBF7',
        'velmora-text': '#1A1A1A',
        'velmora-text-secondary': '#6B635B',
        'velmora-gold': '#C9A96E',
        'velmora-gold-hover': '#B8954E',
        'velmora-border': '#E5DED5',
        'velmora-card': '#FFFFFF',
        'velmora-muted': '#F5F0EB',
        'velmora-foreground': '#1A1A1A',
      },
      fontFamily: {
        'serif': ['"Cormorant Garamond"', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.12em',
      },
    },
  },
  plugins: [],
}
