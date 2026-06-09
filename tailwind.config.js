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
          'ai-blue': '#7671FF',
          'ai-pink': '#CB0C9F',
        },
        heading: {
          DEFAULT: '#4B5056',
          dark: '#2E2E2F',
        },
        body: '#636972',
        'card-border': '#C6C9CD',
        divider: '#E2E4E7',
        'light-bg': '#F4F6F8',
      },
      fontFamily: {
        heading: ['"Josefin Sans"', 'Poppins', 'sans-serif'],
        body: ['"Open Sans"', 'sans-serif'],
      },
      borderRadius: {
        card: '3px',
        btn: '4px',
        tag: '3px',
      },
    },
  },
  plugins: [],
}
