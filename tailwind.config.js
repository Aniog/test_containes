/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F7F4F0',
        espresso: '#2B211E',
        taupe: '#7D6F68',
        accent: '#A8643E',
        'accent-dark': '#8A4F30',
        gold: '#C9A46A',
        stone: '#E8E0D9',
        'dark-feature': '#241C19',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        label: '0.18em',
      },
    },
  },
  plugins: [],
}
