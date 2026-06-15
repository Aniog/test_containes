/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-purple': '#8159BB',
        'heading-dark': '#2E2E2F',
        'heading-gray': '#4B5056',
        'body-gray': '#636972',
        'card-border': '#C6C9CD',
        'divider': '#E2E4E7',
        'bg-light': '#F4F6F8',
      },
      fontFamily: {
        heading: ['"Josefin Sans"', 'sans-serif'],
        body: ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
