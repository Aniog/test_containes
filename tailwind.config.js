/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F2',
        charcoal: '#1A1A1A',
        'warm-gray': '#6B6560',
        gold: '#C9A962',
        'gold-light': '#E8DCC4',
        ivory: '#FFFEF9',
        'divider': '#E8E4DE',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest': '0.15em',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0,0,0,0.06)',
        'hover': '0 8px 30px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
}
