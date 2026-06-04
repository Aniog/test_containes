/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: {
          DEFAULT: '#F2F0E9',
          light: '#F8F6EF',
          dark: '#E8E4D8',
        },
        ink: {
          DEFAULT: '#1A1A1A',
          light: '#2A2A2A',
        },
        charcoal: {
          DEFAULT: '#4A4A4A',
          light: '#6B6B6B',
          muted: '#8A8A8A',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
