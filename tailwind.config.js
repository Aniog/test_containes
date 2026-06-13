/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-purple': '#8159BB',
        'body-text': '#636972',
        'heading-text': '#4B5056',
        'hero-heading': '#2E2E2F',
        'card-border': '#C6C9CD',
        'subtle-divider': '#E2E4E7',
        'light-bg': '#F4F6F8',
        'blue-ai': '#7671FF',
        'pink-ai': '#CB0C9F',
      },
      fontFamily: {
        'heading': ['Josefin Sans', 'Poppins', 'sans-serif'],
        'body': ['Open Sans', 'sans-serif'],
      },
      spacing: {
        '5': '5px',
        '10': '10px',
        '15': '15px',
        '20': '20px',
        '30': '30px',
        '40': '40px',
        '50': '50px',
        '60': '60px',
        '70': '70px',
        '80': '80px',
      },
      borderRadius: {
        'card': '3px',
        'tag': '3px',
        'button': '4px',
      },
      fontSize: {
        'tag': '11px',
        'body': '14px',
        'h1-desktop': ['44px', { lineHeight: '1.2' }],
        'h1-mobile': ['30px', { lineHeight: '1.2' }],
        'h2-desktop': ['28px', { lineHeight: '1.2' }],
        'h2-mobile': ['24px', { lineHeight: '1.2' }],
        'h3-desktop': ['22px', { lineHeight: '1.2' }],
        'h3-mobile': ['20px', { lineHeight: '1.2' }],
      },
      height: {
        'button': '36px',
        'button-lg': '44px',
      },
      padding: {
        'button': '9px 15px',
        'tag': '2px 6px',
        'card': '20px',
      },
    },
  },
  plugins: [],
}
