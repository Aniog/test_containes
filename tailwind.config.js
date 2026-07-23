/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FDFBF7',
        muted: '#F5F0EB',
        charcoal: '#1C1917',
        'warm-gray': '#6B5E54',
        gold: '#9E7C4C',
        'gold-dark': '#7D6139',
        warm: '#E8E0D8',
        dark: '#1C1917',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
