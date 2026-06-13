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
        'ai-start': '#7671FF',
        'ai-end': '#CB0C9F',
        'body': '#636972',
        'heading': '#4B5056',
        'hero-heading': '#2E2E2F',
        'card-border': '#C6C9CD',
        'divider': '#E2E4E7',
        'bg-light': '#F4F6F8',
      },
      fontFamily: {
        'heading': ['"Josefin Sans"', 'Poppins', 'sans-serif'],
        'body': ['"Open Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
