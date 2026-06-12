/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Josefin Sans"', '"Brandon Grotesque"', 'Poppins', 'sans-serif'],
        body: ['"Open Sans"', 'sans-serif'],
      },
      colors: {
        brand: {
          purple: '#8159BB',
          'ai-from': '#7671FF',
          'ai-to': '#CB0C9F',
        },
        strk: {
          'body-text': '#636972',
          'heading': '#4B5056',
          'hero-h1': '#2E2E2F',
          'card-border': '#C6C9CD',
          'divider': '#E2E4E7',
          'bg-light': '#F4F6F8',
        },
      },
      backgroundImage: {
        'ai-gradient': 'linear-gradient(to right, #7671FF, #CB0C9F)',
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
}
