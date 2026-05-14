/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F4F7FB',
        petal: '#D6E4F0',
        coral: '#2563EB',
        'coral-dark': '#1D4ED8',
        leaf: '#3B82F6',
        'leaf-light': '#EFF6FF',
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
