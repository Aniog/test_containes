/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-purple': '#8159BB',
        'body-gray': '#636972',
        'heading-gray': '#4B5056',
        'hero-dark': '#2E2E2F',
        'card-border': '#C6C9CD',
        'divider': '#E2E4E7',
        'light-bg': '#F4F6F8',
      },
      fontFamily: {
        heading: ['"Brandon Grotesque"', '"Josefin Sans"', 'sans-serif'],
        body: ['"Open Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'ai-gradient': 'linear-gradient(to right, #7671FF, #CB0C9F)',
        'hero-wash': 'radial-gradient(circle at center, rgba(129, 89, 187, 0.05), transparent 60%)',
      }
    },
  },
  plugins: [],
}
