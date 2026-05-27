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
        'body-gray': '#636972',
        'heading-dark': '#4B5056',
        'heading-darker': '#2E2E2F',
        'card-border': '#C6C9CD',
        'subtle-divider': '#E2E4E7',
        'light-bg': '#F4F6F8',
        'blue-ai': '#7671FF',
        'pink-ai': '#CB0C9F',
      },
      fontFamily: {
        'heading': ['"Josefin Sans"', 'Poppins', 'sans-serif'],
        'body': ['"Open Sans"', 'sans-serif'],
      },
      maxWidth: {
        'content': '1200px',
      },
    },
  },
  plugins: [],
}
