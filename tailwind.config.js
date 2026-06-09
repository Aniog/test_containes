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
        'ai-blue': '#7671FF',
        'ai-pink': '#CB0C9F',
        'body-gray': '#636972',
        'heading-dark': '#2E2E2F',
        'heading-gray': '#4B5056',
        'card-border': '#C6C9CD',
        'divider': '#E2E4E7',
        'light-bg': '#F4F6F8',
      },
      fontFamily: {
        heading: ['Josefin Sans', 'Poppins', 'system-ui', 'sans-serif'],
        body: ['Open Sans', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'card': '3px',
      },
    },
  },
  plugins: [],
}
