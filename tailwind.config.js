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
        'hero-dark': '#2E2E2F',
        'card-border': '#C6C9CD',
        'subtle-divider': '#E2E4E7',
        'light-bg': '#F4F6F8',
      },
      fontFamily: {
        heading: ['"Josefin Sans"', 'Poppins', 'sans-serif'],
        body: ['"Open Sans"', 'sans-serif'],
      },
      borderRadius: {
        'card': '3px',
        'btn': '4px',
        'tag': '3px',
      },
      spacing: {
        '5': '5px',
        '10': '10px',
        '20': '20px',
        '40': '40px',
        '60': '60px',
        '80': '80px',
      },
    },
  },
  plugins: [],
}
