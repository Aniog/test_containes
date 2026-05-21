/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'steel-black': '#0D0F14',
        'charcoal': '#1A1D24',
        'iron-gray': '#2C3140',
        'silver': '#8A9BB0',
        'platinum': '#D4DCE8',
        'off-white': '#F5F7FA',
        'gold': '#C9A84C',
        'gold-light': '#E8C96A',
        'light-bg': '#F0F2F5',
        'light-text': '#1A1D24',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0D0F14 0%, #1A1D24 60%, #2C3140 100%)',
        'gold-gradient': 'linear-gradient(90deg, #C9A84C, #E8C96A)',
      },
      boxShadow: {
        'gold-glow': '0 0 20px rgba(201, 168, 76, 0.25)',
        'card': '0 4px 24px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
}
