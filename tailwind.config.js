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
          body: '#636972',
          heading: '#4B5056',
          hero: '#2E2E2F',
          border: '#C6C9CD',
          divider: '#E2E4E7',
          light: '#F4F6F8',
        },
      },
      fontFamily: {
        heading: ['Josefin Sans', 'Poppins', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      backgroundImage: {
        'ai-gradient': 'linear-gradient(90deg, #7671FF 0%, #CB0C9F 100%)',
      },
    },
  },
  plugins: [],
}
