/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#1A1714',
        cream: '#F7F3EC',
        sand: '#EFE7DA',
        champagne: '#C9A86A',
        'champagne-deep': '#A8854A',
        espresso: '#3A322B',
        taupe: '#8A7E6E',
        linen: '#E4DCCF',
        ivory: '#FBF9F4',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.2em',
        widest3: '0.18em',
      },
      boxShadow: {
        soft: '0 18px 40px -24px rgba(26,23,20,0.35)',
        lift: '0 28px 60px -30px rgba(26,23,20,0.45)',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
}
