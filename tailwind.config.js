/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C0392B',
        'primary-dark': '#922B21',
        accent: '#E67E22',
        'accent-light': '#F5CBA7',
        cream: '#FFF8F0',
        dark: '#2C1810',
        muted: '#7D6B5E',
        warm: '#E8D5C4',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
