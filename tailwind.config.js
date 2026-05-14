/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F4FBF6',
        petal: '#D6EDE0',
        coral: '#2E7D52',
        'coral-dark': '#1F5C3A',
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
