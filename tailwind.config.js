/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'warm-black': '#1A1815',
        'cream': '#FAF8F5',
        'gold': '#C9A962',
        'gold-dark': '#B8944F',
        'charcoal': '#2C2A27',
        'warm-gray': '#7A756D',
        'hairline': '#E8E4DF',
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultrawide': '0.15em',
        'extra-wide': '0.2em',
      },
      boxShadow: {
        'card': '0 4px 20px rgba(26, 24, 21, 0.08)',
        'card-hover': '0 8px 30px rgba(26, 24, 21, 0.12)',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
