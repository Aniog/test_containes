/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-red': '#E63946',
        'brand-red-dark': '#C1121F',
        'brand-red-light': '#FF6B6B',
        'brand-blue': '#1D3557',
        'brand-blue-mid': '#457B9D',
        'brand-blue-light': '#A8DADC',
        'brand-white': '#F1FAEE',
      },
    },
  },
  plugins: [],
}
