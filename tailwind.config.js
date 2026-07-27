/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        luxe: '0 24px 60px -24px rgb(28 25 23 / 0.25)',
      },
    },
  },
  plugins: [],
}
