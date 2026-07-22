/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'velmora': {
          'charcoal': '#1A1A1A',
          'cream': '#FAF7F2',
          'black': '#0D0D0D',
          'gold': '#C9A962',
          'gold-soft': '#E8DCC4',
          'bronze': '#8B7355',
          'gray': '#6B6560',
          'stone': '#E5E0D8',
          'off-white': '#FDFCFA',
        }
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'Georgia', 'serif'],
        'sans': ['Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest': '0.15em',
        'wider': '0.1em',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0,0,0,0.06)',
        'hover': '0 8px 30px rgba(0,0,0,0.1)',
      },
      maxWidth: {
        'container': '1400px',
      },
      spacing: {
        'section': '80px',
        'section-mobile': '48px',
      }
    },
  },
  plugins: [],
}
