/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#8159BB',
          'blue-ai': '#7671FF',
          'pink-ai': '#CB0C9F',
        },
        body: '#636972',
        heading: '#4B5056',
        'heading-dark': '#2E2E2F',
        'card-border': '#C6C9CD',
        'subtle-divider': '#E2E4E7',
        'light-bg': '#F4F6F8',
      },
      fontFamily: {
        heading: ["Josefin Sans", "Poppins", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
      backgroundImage: {
        'ai-gradient': 'linear-gradient(to right, #7671FF, #CB0C9F)',
      },
    },
  },
  plugins: [],
}
