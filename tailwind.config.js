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
        charcoal: '#1A1714',
        'warm-gray': '#6B6560',
        'light-gray': '#A39E99',
        'hairline': '#E8E2DA',
        accent: '#C9A96E',
        'accent-hover': '#B8975A',
        dark: '#1A1714',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.15em',
      },
      maxWidth: {
        'container': '1280px',
      },
    },
  },
  plugins: [],
}
