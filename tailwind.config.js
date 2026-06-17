/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#0E1116',
        graphite: '#1B1F25',
        steel: '#5A6473',
        mist: '#E5E8EE',
        paper: '#FAFAF7',
        bone: '#F2EFE8',
        accent: {
          DEFAULT: '#B8894B',
          dark: '#8E6731',
        },
      },
    },
  },
  plugins: [],
}
