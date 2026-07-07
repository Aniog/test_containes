/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Velmora quiet luxury palette
        velmora: {
          bg: '#F8F5F0',
          surface: '#FFFFFF',
          'surface-alt': '#F5F2ED',
          text: '#2C2825',
          'text-muted': '#6B635C',
          'text-light': '#8A8178',
          border: '#D4C9B9',
          'border-light': '#E8E0D5',
          gold: '#B89778',
          'gold-dark': '#8B6F47',
          'gold-light': '#D4B896',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        'product': '0.08em',
        'wide': '0.05em',
      },
      transitionDuration: {
        '250': '250ms',
      },
      boxShadow: {
        'soft': '0 2px 12px -2px rgba(44, 40, 37, 0.08), 0 1px 4px -1px rgba(44, 40, 37, 0.04)',
        'card': '0 1px 3px rgba(44, 40, 37, 0.06)',
      },
    },
  },
  plugins: [],
}
