/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: '#1C1917',
        cream: '#FAF7F2',
        gold: '#C5A059',
        'gold-hover': '#B08D48',
        muted: '#78716C',
        border: '#E7E5E4',
        white: '#FFFFFF',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        product: '0.15em',
        wide: '0.05em',
      },
      maxWidth: {
        'page': '1440px',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
