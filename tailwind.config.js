/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F5F0EB',
        charcoal: '#1C1917',
        gold: {
          DEFAULT: '#C9A96E',
          hover: '#B8944F',
          light: '#E8D5B0',
        },
        warmgray: '#6B5E52',
        muted: '#9C8E82',
        borderwarm: '#E5DDD3',
        cardwhite: '#FAF7F3',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1280px',
      },
      letterSpacing: {
        product: '0.15em',
        logo: '0.25em',
        cta: '0.1em',
      },
    },
  },
  plugins: [],
}
