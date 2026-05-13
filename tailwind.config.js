/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: '#8159BB',
        'ai-from': '#7671FF',
        'ai-to': '#CB0C9F',
        body: '#636972',
        heading: '#4B5056',
        'hero-h1': '#2E2E2F',
        'card-border': '#C6C9CD',
        divider: '#E2E4E7',
        'bg-light': '#F4F6F8',
      },
      fontFamily: {
        heading: ['Josefin Sans', 'Poppins', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
}
