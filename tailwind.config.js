/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#1a2744',
          'navy-light': '#2a3f6a',
          gold: '#c9953c',
          'gold-light': '#e0b05e',
          cream: '#f8f7f4',
          text: '#1a1a2e',
          'text-muted': '#5a5a7a',
          border: '#e5e0d8',
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
