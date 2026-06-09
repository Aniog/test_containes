/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        strk: {
          purple: '#8159BB',
          body: '#636972',
          heading: '#4B5056',
          heroHeading: '#2E2E2F',
          border: '#C6C9CD',
          divider: '#E2E4E7',
          lightBg: '#F4F6F8',
        }
      },
      fontFamily: {
        heading: ['"Brandon Grotesque"', '"Josefin Sans"', 'sans-serif'],
        body: ['"Open Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'ai-gradient': 'linear-gradient(to right, #7671FF, #CB0C9F)',
      }
    },
  },
  plugins: [],
}
