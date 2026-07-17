/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'steel-navy': '#0D1B2A',
        'iron-blue': '#1B3A5C',
        'copper-gold': '#C8922A',
        'light-gold': '#E8B84B',
        'slate-gray': '#4A5568',
        'cloud-white': '#F7F8FA',
        'mid-gray': '#8A9BB0',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0D1B2A 0%, #1B3A5C 60%, #0D1B2A 100%)',
        'gold-gradient': 'linear-gradient(90deg, #C8922A, #E8B84B)',
      },
    },
  },
  plugins: [],
}
