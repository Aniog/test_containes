/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-orange': '#E8622A',
        'brand-brown': '#5C3317',
        'warm-bg': '#FDF8F3',
        'warm-card': '#F5EDE3',
        'text-main': '#2D1B0E',
        'text-sub': '#7A5C44',
      },
      fontFamily: {
        sans: ['Noto Sans SC', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Noto Serif SC', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
