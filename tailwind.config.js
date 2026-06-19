/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#FAF9F7',
        'bg-warm': '#F5F0EB',
        surface: '#FFFFFF',
        border: '#E8E4DE',
        primary: '#1A1915',
        secondary: '#6B6560',
        muted: '#9B9590',
        accent: '#B8956B',
        'accent-hover': '#A07D55',
        gold: '#C9A962',
        'gold-light': '#D4B978',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.15em',
        'wider': '0.2em',
      },
    },
  },
  plugins: [],
}
