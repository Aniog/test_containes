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
        'heading': '#4B5056',
        'hero-h1': '#2E2E2F',
        'card-border': '#C6C9CD',
        'subtle-divider': '#E2E4E7',
        'light-bg': '#F4F6F8',
      },
      fontFamily: {
        'heading': ['"Josefin Sans"', '"Poppins"', 'sans-serif'],
        'body': ['"Open Sans"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'content': '1200px',
      },
    },
  },
  plugins: [],
}
