/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coral: {
          DEFAULT: '#FF5533',
          hover: '#E84420',
        },
        surface: {
          DEFAULT: '#13131A',
          elevated: '#1C1C27',
        },
        border: {
          DEFAULT: '#2A2A38',
          subtle: '#1E1E2A',
        },
        text: {
          body: '#C8C8D8',
          muted: '#7A7A96',
          label: '#9090B0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
