/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif-custom': ['Playfair Display', 'Georgia', 'serif'],
        'sans-custom': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        velmora: {
          bg: '#F8F5F1',
          'bg-dark': '#1A1816',
          surface: '#FFFFFF',
          'surface-warm': '#F5F1EB',
          text: '#1A1816',
          'text-muted': '#8B8178',
          'text-light': '#F8F5F1',
          gold: '#C5A46E',
          'gold-dark': '#A68A5A',
          'gold-light': '#D4B98A',
          border: '#EDE9E3',
          'border-dark': '#3A3632',
        },
      },
    },
  },
  plugins: [],
}
