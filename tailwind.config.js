/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          'dark': '#1A1A2E',
          'navy': '#16213E',
          'gold': '#C9A84C',
          'gold-hover': '#B8953E',
          'cream': '#F5F0E8',
          'warm-gray': '#E5E0D6',
        },
      },
      fontFamily: {
        'display': ['"Playfair Display"', 'serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
