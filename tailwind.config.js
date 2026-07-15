/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif-display': ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        'serif': ['Cormorant Garamond', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: '#F7F4EF',
        'cream-dark': '#EDE8E0',
        ink: '#0D0D0D',
        'ink-light': '#1A1A1A',
        gold: '#B89778',
        'gold-dark': '#8B7355',
        'gold-light': '#C5A46E',
        muted: '#6B635C',
        'muted-light': '#9A9085',
      },
      letterSpacing: {
        'widest': '0.15em',
        'ultra': '0.2em',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
