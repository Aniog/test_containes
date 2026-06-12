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
        'body-text': '#636972',
        'heading-section': '#4B5056',
        'heading-hero': '#2E2E2F',
        'card-border': '#C6C9CD',
        'divider': '#E2E4E7',
        'light-bg': '#F4F6F8',
      },
      fontFamily: {
        heading: ['"Josefin Sans"', 'Poppins', 'sans-serif'],
        body: ['"Open Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'ai-gradient': 'linear-gradient(to right, #7671FF, #CB0C9F)',
      },
      maxWidth: {
        'content': '1200px',
      },
    },
  },
  plugins: [],
}
