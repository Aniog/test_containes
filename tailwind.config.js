/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velmora: {
          cream: '#F7F4F0',
          deep: '#1A1714',
          gold: '#B08968',
          'gold-dark': '#8C6B4F',
          taupe: '#6B6560',
          hairline: '#DED8D1',
          'hairline-dark': '#3A3530',
          ivory: '#FDFBF8',
          star: '#C9A227',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.22em',
      },
      transitionDuration: {
        '500': '500ms',
        '700': '700ms',
      },
      boxShadow: {
        'product': '0 12px 30px rgba(26,23,23,0.08)',
        'product-hover': '0 20px 40px rgba(26,23,23,0.12)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
