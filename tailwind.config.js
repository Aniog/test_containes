/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'teal-ocean': '#0d7377',
        'teal-ocean-dark': '#0a5c60',
        'teal-ocean-light': '#14a8ad',
        'coral': '#f4623a',
        'coral-light': '#f7845f',
        'seafoam': '#f0f7f7',
        'surface-alt': '#e6f4f4',
        'navy': '#0f2b3d',
        'slate-text': '#4a6572',
        'muted-text': '#8aa5b0',
        'border-ocean': '#c8dfe0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
