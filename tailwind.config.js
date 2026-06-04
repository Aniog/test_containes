/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'strk-purple': '#8159BB',
        'strk-ai-start': '#7671FF',
        'strk-ai-end': '#CB0C9F',
        'strk-body': '#636972',
        'strk-heading': '#4B5056',
        'strk-hero': '#2E2E2F',
        'strk-card-border': '#C6C9CD',
        'strk-divider': '#E2E4E7',
        'strk-light': '#F4F6F8',
        'strk-white': '#FFFFFF',
      },
      fontFamily: {
        heading: ['"Josefin Sans"', 'Poppins', 'sans-serif'],
        body: ['"Open Sans"', 'sans-serif'],
      },
      borderRadius: {
        'strk': '3px',
        'strk-btn': '4px',
      },
      maxWidth: {
        'content': '1200px',
      },
    },
  },
  plugins: [],
}
