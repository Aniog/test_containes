/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'serif-display': ['"Playfair Display"', 'serif'],
        'sans-custom': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 20px 50px rgba(28, 25, 23, 0.08)',
      },
    },
  },
  plugins: [],
}
