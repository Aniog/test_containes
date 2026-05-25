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
        'primary-dark': '#153d73',
        'primary-light': '#EBF4FF',
        accent: '#C0392B',
        'accent-dark': '#a93226',
        gold: '#D4A017',
        'bg-light': '#F8F9FB',
        'bg-surface': '#F1F4F8',
        border: '#E2E8F0',
        'text-primary': '#1A202C',
        'text-secondary': '#4A5568',
        'text-muted': '#718096',
        success: '#2D7D46',
        'footer-bg': '#1A202C',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
