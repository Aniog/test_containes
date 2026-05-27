/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'forest-green': '#1a4d3a',
        'moss-green': '#4a7c59',
        'golden-amber': '#d4a574',
        'soft-cream': '#faf8f5',
        'dark-charcoal': '#2d3748',
        'medium-gray': '#718096',
        'light-green': '#e6f3e6',
      },
    },
  },
  plugins: [],
}
