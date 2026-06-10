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
        text: {
          body: '#636972',
          heading: '#4B5056',
          'hero-dark': '#2E2E2F',
        },
        border: {
          card: '#C6C9CD',
          subtle: '#E2E4E7',
        },
        background: {
          light: '#F4F6F8',
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        heading: ['Brandon Grotesque', 'Josefin Sans', 'Poppins', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      spacing: {
        '5': '5px',
      },
      boxShadow: {
        'card-hover': '0 4px 12px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
}
