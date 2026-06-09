/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Josefin Sans"', 'Poppins', 'sans-serif'],
        body: ['"Open Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          purple: '#8159BB',
          'body-text': '#636972',
          'heading': '#4B5056',
          'hero-h1': '#2E2E2F',
          'card-border': '#C6C9CD',
          divider: '#E2E4E7',
          'light-bg': '#F4F6F8',
        },
        ai: {
          blue: '#7671FF',
          pink: '#CB0C9F',
        },
      },
      borderRadius: {
        card: '3px',
      },
      maxWidth: {
        content: '1200px',
      },
      fontSize: {
        'body': ['14px', { lineHeight: '1.5' }],
        'tag': ['11px', { lineHeight: '1.3' }],
      },
    },
  },
  plugins: [],
}
