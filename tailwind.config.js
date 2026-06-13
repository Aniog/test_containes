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
        heading: '#4B5056',
        'hero-heading': '#2E2E2F',
        body: '#636972',
        border: '#C6C9CD',
        divider: '#E2E4E7',
        surface: '#F4F6F8',
      },
      fontFamily: {
        heading: ['"Josefin Sans"', 'Poppins', 'sans-serif'],
        body: ['"Open Sans"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
      borderRadius: {
        card: '3px',
      },
      fontSize: {
        'h1-desktop': ['2.75rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h1-mobile': ['1.75rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h2-desktop': ['1.75rem', { lineHeight: '1.3', fontWeight: '700' }],
        'h2-mobile': ['1.375rem', { lineHeight: '1.3', fontWeight: '700' }],
        'h3': ['1.125rem', { lineHeight: '1.3', fontWeight: '700' }],
        body: ['0.875rem', { lineHeight: '1.5' }],
      },
      spacing: {
        'section': '40px',
        'block': '20px',
      },
    },
  },
  plugins: [],
}
