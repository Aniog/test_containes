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
        'body-text': '#636972',
        'heading-section': '#4B5056',
        'heading-hero': '#2E2E2F',
        'card-border': '#C6C9CD',
        'divider': '#E2E4E7',
        'light-bg': '#F4F6F8'
      },
      fontFamily: {
        heading: ['"Josefin Sans"', 'sans-serif'],
        body: ['"Open Sans"', 'sans-serif']
      }
    },
  },
  plugins: [],
}
