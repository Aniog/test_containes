/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif-custom': ['Playfair Display', 'Georgia', 'serif'],
        'sans-custom': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'velmora': {
          base: '#1A1816',
          cream: '#F8F5F1',
          taupe: '#C4B5A5',
          gold: '#C5A46E',
          'gold-dark': '#8B7355',
          muted: '#6B665F',
          border: '#E8E4DE',
        }
      },
      letterSpacing: {
        'wide-product': '0.08em',
      },
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
      }
    },
  },
  plugins: [],
}
