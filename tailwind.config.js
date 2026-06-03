/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Josefin Sans"', 'sans-serif'],
        body: ['"Open Sans"', 'sans-serif'],
      },
      colors: {
        brand: {
          purple: '#8159BB',
          'purple-hover': '#6e4aa8',
        },
        ai: {
          start: '#7671FF',
          end: '#CB0C9F',
        },
        text: {
          body: '#636972',
          heading: '#4B5056',
          'hero-heading': '#2E2E2F',
        },
        border: {
          card: '#C6C9CD',
          subtle: '#E2E4E7',
        },
        surface: {
          light: '#F4F6F8',
        },
      },
      borderRadius: {
        DEFAULT: '3px',
      },
    },
  },
  plugins: [],
}
