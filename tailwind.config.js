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
        'background-alt': '#F3EFEA',
        foreground: '#1A1714',
        muted: '#8B8580',
        accent: {
          DEFAULT: '#B8860B',
          light: '#D4A843',
          soft: '#F5ECD7',
          dark: '#96700A',
        },
        border: '#E8E2DA',
        card: '#FFFFFF',
        dark: '#1A1714',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-plus': '0.25em',
      },
    },
  },
  plugins: [],
}
