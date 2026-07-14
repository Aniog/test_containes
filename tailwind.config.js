/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: '#F5F0EB',
        surface: '#FFFFFF',
        charcoal: '#1A1A1A',
        taupe: '#6B635B',
        gold: '#C9A86C',
        'gold-dark': '#B8954E',
        beige: '#E5DDD5',
        'beige-light': '#EDE7DF',
        'green-muted': '#4A7C59',
        'red-muted': '#C65D5D',
      },
      letterSpacing: {
        wider: '0.08em',
        widest: '0.12em',
        superwide: '0.16em',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
