/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#1A1714',
        cream: '#F5F0EB',
        gold: '#C9A96E',
        'gold-light': '#D4BA8A',
        'gold-dark': '#A8894E',
        brown: '#3D3229',
        taupe: '#8B7E74',
        'warm-gray': '#E8E2DB',
        'off-white': '#FAF8F5',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-custom': '0.15em',
      },
    },
  },
  plugins: [],
}
