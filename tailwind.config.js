/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF8F5',
        parchment: '#F3EFE8',
        espresso: '#1C1A17',
        'warm-gray': '#6B6560',
        taupe: '#A8A199',
        gold: '#B88A4D',
        'gold-dark': '#8F6A38',
        ivory: '#FFFFFF',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest': '0.18em',
      },
      boxShadow: {
        soft: '0 8px 30px rgba(28, 26, 23, 0.08)',
        card: '0 4px 20px rgba(28, 26, 23, 0.06)',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
