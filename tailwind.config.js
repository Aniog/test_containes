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
        body: '#636972',
        heading: '#4B5056',
        'heading-dark': '#2E2E2F',
        card: {
          border: '#C6C9CD',
        },
        divider: '#E2E4E7',
        subtle: '#F4F6F8',
        white: '#FFFFFF',
      },
      fontFamily: {
        heading: ['Josefin Sans', 'Poppins', 'sans-serif'],
        body: ['Open Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'heading-xl': ['40px', '48px'],
        'heading-lg': ['26px', '32px'],
        'body-base': ['14px', '21px'],
      },
      spacing: {
        'section': '40px',
        'block': '20px',
        'hero': '60px',
      },
      maxWidth: {
        'content': '1200px',
      },
      borderRadius: {
        'card': '3px',
        'tag': '3px',
        'button': '4px',
      },
      boxShadow: {
        'card-hover': '0 4px 12px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}
