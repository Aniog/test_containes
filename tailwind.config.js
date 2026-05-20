/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-brown': '#8B6F47',
        'brand-green': '#4A6741',
        'brand-gold': '#C9A84C',
        'brand-cream': '#FAF7F2',
        'brand-beige': '#F0EAE0',
        'brand-dark': '#3D2B1F',
        'brand-muted': '#7A6A5A',
      },
      fontFamily: {
        serif: ['"Noto Serif SC"', 'Georgia', 'serif'],
        sans: ['"Noto Sans SC"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
