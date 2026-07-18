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
          'base': '#1a1816',
          'cream': '#faf8f5',
          'warm': '#f5f0eb',
          'sand': '#e8e0d6',
          'gold': '#c9a96e',
          'gold-dark': '#b8956a',
          'gold-light': '#d4b88a',
          'charcoal': '#2d2a26',
          'stone': '#8c8279',
          'muted': '#a69f96',
        }
      },
      fontFamily: {
        'serif': ['"Cormorant Garamond"', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest': '0.2em',
        'ultra': '0.3em',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
