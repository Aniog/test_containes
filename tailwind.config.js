/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFFBF4',
        petal: '#FDE8D8',
        coral: '#E8614A',
        'coral-dark': '#C94A35',
        leaf: '#4A7C59',
        'leaf-light': '#EAF4EC',
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
