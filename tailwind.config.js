/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FDF4F4',
        petal: '#FAD7D7',
        coral: '#DC2626',
        'coral-dark': '#B91C1C',
        leaf: '#EF4444',
        'leaf-light': '#FEF2F2',
        charcoal: '#2C2C2C',
        muted: '#7A7A7A',
        border: '#EDE8E0',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Lato', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
