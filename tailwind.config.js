/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors
        brand: {
          purple: '#8159BB',
        },
        // AI gradient colors
        ai: {
          blue: '#7671FF',
          pink: '#CB0C9F',
        },
        // Text colors
        body: '#636972',
        heading: '#4B5056',
        headingDark: '#2E2E2F',
        // UI colors
        border: '#C6C9CD',
        divider: '#E2E4E7',
        surface: '#F4F6F8',
      },
      fontFamily: {
        // Heading font with fallbacks (Brandon Grotesque -> Josefin Sans -> Poppins)
        heading: ['Josefin Sans', 'Poppins', 'system-ui', 'sans-serif'],
        // Body font
        body: ['Open Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(1.75rem, 4vw, 3rem)', { lineHeight: '1.2' }],
        'section': ['clamp(1.625rem, 3vw, 2rem)', { lineHeight: '1.2' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
      },
      spacing: {
        'section': '40px',
        'block': '20px',
        'hero': '80px',
      },
      maxWidth: {
        'content': '1200px',
      },
      backgroundImage: {
        'ai-gradient': 'linear-gradient(135deg, #7671FF 0%, #CB0C9F 100%)',
      },
      borderRadius: {
        'card': '3px',
      },
    },
  },
  plugins: [],
}
