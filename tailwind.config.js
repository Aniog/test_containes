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
        pearl: '#F3EDE4',
        surface: '#FFFFFF',
        charcoal: '#1C1917',
        'warm-gray': '#78716C',
        stone: '#A8A29E',
        gold: '#B8960B',
        'gold-dark': '#96790A',
        'gold-wash': '#F5ECD7',
        'border-warm': '#E7E0D5',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'product': '0.15em',
        'section': '0.1em',
        'button': '0.08em',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.06)',
        'card-hover': '0 8px 25px rgba(0,0,0,0.08)',
        'nav': '0 1px 0 rgba(0,0,0,0.05)',
      },
      transitionDuration: {
        '250': '250ms',
      },
    },
  },
  plugins: [],
}
