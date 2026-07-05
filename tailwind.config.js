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
        'warm-black': '#0D0D0D',
        gold: '#C9A962',
        'gold-light': '#E5D4A1',
        'gold-dark': '#9A7B3F',
        stone: {
          50: '#FAFAF9',
          100: '#F5F5F4',
          200: '#E7E5E4',
          300: '#D6D3D1',
          400: '#A8A29E',
          500: '#78716C',
          600: '#57534E',
        }
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
        'soft-lg': '0 8px 30px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
}
