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
        'strk-body': '#636972',
        'strk-heading': '#4B5056',
        'strk-heading-dark': '#2E2E2F',
        'strk-border': '#C6C9CD',
        'strk-divider': '#E2E4E7',
        'strk-light-bg': '#F4F6F8',
        'strk-ai-blue': '#7671FF',
        'strk-ai-pink': '#CB0C9F',
      },
      fontFamily: {
        heading: ['"Josefin Sans"', 'Poppins', 'system-ui', 'sans-serif'],
        body: ['"Open Sans"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '3px',
        btn: '4px',
      },
      spacing: {
        'section-gap': '40px',
        'block-gap': '20px',
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
}
