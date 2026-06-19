/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F8F4EE',
          dark: '#F0E9DF',
        },
        gold: {
          DEFAULT: '#C69C6D',
          light: '#E8D5B7',
          dark: '#A67C4E',
        },
        charcoal: '#1C1A17',
        'text-primary': '#2D2A24',
        'text-muted': '#8C867C',
        'border-light': '#E5DDD3',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        wide: '0.08em',
        wider: '0.15em',
      },
    },
  },
  plugins: [],
}
