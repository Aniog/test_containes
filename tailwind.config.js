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
          cream: '#FAF7F2',
          gold: '#C9A96E',
          'gold-hover': '#B8944F',
          'gold-light': '#E8D5B0',
          charcoal: '#1C1917',
          divider: '#E7E0D6',
          muted: '#78716C',
          'warm-gray': '#A8A29E',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'product': '0.15em',
        'wide-product': '0.2em',
      },
      maxWidth: {
        'content': '1280px',
      },
    },
  },
  plugins: [],
}
