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
          DEFAULT: '#faf8f5',
          50: '#fdfcfa',
          100: '#faf8f5',
          200: '#f5ede0',
          300: '#ede0cc',
        },
        charcoal: {
          DEFAULT: '#1c1917',
          light: '#2d2926',
          muted: '#7c6e62',
        },
        gold: {
          DEFAULT: '#b8965a',
          light: '#d4b483',
          dark: '#9a7a42',
          pale: '#f0e6d3',
        },
        divider: '#e8e0d5',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        'ultra-wide': '0.35em',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
}
