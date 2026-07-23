/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deepCharcoal: '#1C1C1C',
        warmCream: '#F5F0EB',
        gold: '#C9A96E',
        goldLight: '#D4B87A',
        textDark: '#2D2D2D',
        textLight: '#F5F0EB',
        textMuted: '#8A8A8A',
        divider: '#E0D5CC',
        surface: '#EDE8E3',
        success: '#5A8A6E',
        error: '#C45C5C',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
