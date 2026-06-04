/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canopy: {
          deep:    '#1A2421',
          moss:    '#2D3A2C',
          bark:    '#3B2F25',
          mist:    '#C4C9C2',
          'mist-light': '#DDE0D9',
          fog:     '#8A9085',
          stone:   '#5C5F58',
          lichen:  '#7A8B6E',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        rugged: '2px',
      },
    },
  },
  plugins: [],
}
