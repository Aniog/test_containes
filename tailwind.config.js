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
        gold: {
          DEFAULT: '#C9A96E',
          hover: '#B8954A',
          light: '#F5F0E8',
          star: '#D4A84B',
        },
        charcoal: '#1A1A1A',
        'warm-gray': '#6B6B6B',
        'warm-beige': '#E8E0D4',
        card: '#FFFFFF',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        wide: '0.15em',
        wider: '0.2em',
      },
      maxWidth: {
        'content': '1280px',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
