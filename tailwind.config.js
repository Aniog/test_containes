/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#1a5c8a',
        'brand-primary-light': '#2d7ab5',
        'brand-primary-dark': '#0f3d5e',
        'brand-accent': '#4caf7d',
        'brand-accent-light': '#6fcf97',
      },
      fontFamily: {
        sans: ['"Noto Sans SC"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
