/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a5f',
        'primary-light': '#2d5a8e',
        accent: '#e8600a',
        'accent-dark': '#c75008',
        surface: '#f8fafc',
        card: '#ffffff',
        'text-primary': '#1a2b3d',
        'text-secondary': '#4b5e73',
        'text-muted': '#7a8fa3',
        border: '#e2e8f0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
