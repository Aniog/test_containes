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
          gold: '#C9A96E',
          'gold-hover': '#B8944F',
          'gold-light': '#E8D5B0',
          cream: '#FAF7F2',
          'warm-gray': '#F5F0EB',
          charcoal: '#1C1917',
          muted: '#78716C',
          divider: '#E7E5E4',
        }
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
        '8xl': '1400px',
      },
    },
  },
  plugins: [],
}
