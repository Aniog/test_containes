/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF8F5',
        ivory: '#F5F0EB',
        primary: '#1A1A1A',
        secondary: '#6B5E54',
        accent: '#9E7A47',
        'accent-hover': '#7D5F35',
        border: '#E8E0D8',
        muted: '#D4C9BE',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'product': '0.2em',
      },
    },
  },
  plugins: [],
}
