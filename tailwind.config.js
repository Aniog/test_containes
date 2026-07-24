/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velmora: {
          gold: '#C9A96E',
          goldHover: '#B8944F',
          dark: '#1C1917',
          cream: '#FAF7F2',
          warmWhite: '#F5F0EB',
          textSecondary: '#78716C',
          hairline: '#E7E5E4',
          borderDark: '#292524',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
