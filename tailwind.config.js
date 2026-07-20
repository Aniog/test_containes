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
        charcoal: '#1A1A1A',
        accent: {
          DEFAULT: '#8B6914',
          light: '#C9A84C',
          dark: '#6B5210',
        },
        muted: '#6B6560',
        border: '#E8E2DA',
        surface: '#FFFFFF',
        'dark-surface': '#1A1A1A',
        'dark-muted': '#A39E99',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        product: '0.12em',
        wide: '0.05em',
      },
    },
  },
  plugins: [],
}
