/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A3C6E',
        'primary-light': '#2A5298',
        accent: '#C0392B',
        gold: '#D4A017',
        'light-blue': '#EBF2FA',
        'text-dark': '#1A1A2E',
        'text-muted': '#6B7280',
        border: '#E5E7EB',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
