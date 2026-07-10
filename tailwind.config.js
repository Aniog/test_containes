/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0F1C2E',
        steel: '#1E3A5F',
        gold: '#C8922A',
        'gold-light': '#E8B84B',
        surface: '#162032',
        'border-steel': '#2A4060',
        'text-primary': '#F0F4F8',
        'text-secondary': '#94A3B8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
