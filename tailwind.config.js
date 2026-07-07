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
        espresso: '#2A2520',
        cream: '#F7F2EA',
        sand: '#EDE4D6',
        champagne: '#C9A86A',
        'gold-deep': '#A8854A',
        stone: '#8A8074',
        'stone-light': '#B8AFA3',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.18em',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(26,23,20,0.18)',
        'soft-lg': '0 24px 60px -20px rgba(26,23,20,0.28)',
      },
      transitionTimingFunction: {
        luxury: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
