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
          DEFAULT: '#B8860B',
          light: '#D4A853',
        },
        muted: {
          DEFAULT: '#6B6B6B',
          light: '#F5F0E8',
        },
        border: '#E8E2D9',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        product: '0.15em',
        section: '0.05em',
      },
    },
  },
  plugins: [],
}
