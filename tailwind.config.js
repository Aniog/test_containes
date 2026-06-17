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
        'heading-gray': '#4B5056',
        'h1-dark': '#2E2E2F',
        'card-border': '#C6C9CD',
        'divider': '#E2E4E7',
        'light-bg': '#F4F6F8',
      },
      fontFamily: {
        heading: ['Josefin Sans', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      backgroundImage: {
        'ai-gradient': 'linear-gradient(90deg, #7671FF 0%, #CB0C9F 100%)',
      },
      borderRadius: {
        'card': '3px',
      },
      boxShadow: {
        'card-hover': '0 4px 12px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}
