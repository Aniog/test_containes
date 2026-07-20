/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF8F5',
        surface: '#FFFFFF',
        'text-primary': '#1A1A1A',
        'text-secondary': '#6B6560',
        'text-muted': '#9B9590',
        accent: '#B8860B',
        'accent-hover': '#996F0A',
        'accent-light': '#F5E6C8',
        border: '#E8E2DA',
        'border-thin': '#D4CFC8',
        dark: '#1A1A1A',
        'dark-text': '#FAF8F5',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
