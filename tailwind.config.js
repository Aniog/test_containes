/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A4B8C',
        'primary-dark': '#133a6e',
        'primary-light': '#2563EB',
        'accent-red': '#C0392B',
        'accent-gold': '#D4A017',
        'bg-light': '#F7F9FC',
        'text-dark': '#1A2332',
        'text-medium': '#4A5568',
        'text-light': '#718096',
        success: '#2D7D46',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
