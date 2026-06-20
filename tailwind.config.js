/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FBF9F6',
        surface: '#FFFFFF',
        ink: '#1A1817',
        'ink-secondary': '#6B6560',
        'ink-tertiary': '#9C9691',
        accent: '#B8860B',
        'accent-hover': '#9A7209',
        'accent-soft': '#F5ECD7',
        border: '#E8E4DF',
        'border-strong': '#D4CFC8',
        success: '#2D6A4F',
        error: '#9B2C2C',
        star: '#D4A017',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', '"Times New Roman"', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      letterSpacing: {
        product: '0.18em',
      },
    },
  },
  plugins: [],
}
