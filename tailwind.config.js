/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: '#1C1917',
        cream: '#FAF7F2',
        ivory: '#F5F0E8',
        gold: {
          DEFAULT: '#C9A96E',
          light: '#D4B87A',
          dark: '#A88B4A',
        },
        muted: '#78716C',
        divider: '#E7E0D5',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'product': '0.15em',
        'section': '0.2em',
        'wide-custom': '0.25em',
      },
      maxWidth: {
        'content': '1280px',
      },
    },
  },
  plugins: [],
}
