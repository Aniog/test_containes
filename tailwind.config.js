/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#F7F5F0',
        cream: '#FAF8F4',
        espresso: '#2C1A12',
        taupe: '#6B5E55',
        'warm-gray': '#E8E4DD',
        gold: '#C6A25F',
        'gold-hover': '#B08D4B',
        terracotta: '#B56B4F',
        'terracotta-hover': '#9C5A41',
        border: '#E3DDD5',
        'border-strong': '#D4CCC1',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 8px 30px rgba(44, 26, 18, 0.06)',
        card: '0 4px 20px rgba(44, 26, 18, 0.05)',
      },
      letterSpacing: {
        widest: '0.2em',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
}
