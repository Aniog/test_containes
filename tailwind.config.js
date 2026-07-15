/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#f6f4f0',
        surface: '#ffffff',
        ink: '#1c1917',
        'ink-secondary': '#78716c',
        'ink-muted': '#a8a29e',
        accent: '#b8860b',
        'accent-soft': '#f5ecd7',
        border: '#e7e5e4',
        'border-soft': '#f0ebe3',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
