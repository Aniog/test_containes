/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#faf8f5',
        'cream-dark': '#f0ece7',
        charcoal: '#1a1a1a',
        taupe: '#6b6560',
        gold: {
          DEFAULT: '#b8956a',
          hover: '#a07d54',
          light: '#d4b896',
        },
        border: '#e8e2db',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.2em',
      },
    },
  },
  plugins: [],
}
