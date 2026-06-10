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
        body: {
          gray: '#636972',
        },
        heading: {
          DEFAULT: '#4B5056',
          dark: '#2E2E2F',
        },
        card: {
          border: '#C6C9CD',
        },
        divider: '#E2E4E7',
        light: '#F4F6F8',
      },
      fontFamily: {
        heading: ['"Brandon Grotesque"', '"Josefin Sans"', '"Poppins"', 'system-ui', 'sans-serif'],
        body: ['"Open Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card-hover': '0 4px 12px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}
