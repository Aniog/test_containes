/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cucumber: '#3d7a3d',
        'cucumber-light': '#6aab4f',
        'cucumber-pale': '#e8f5e2',
        'cucumber-cream': '#fafaf5',
        'cucumber-dark': '#1a2e1a',
        'cucumber-muted': '#5a7a5a',
      },
      fontFamily: {
        sans: ['Lato', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
