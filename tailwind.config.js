/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#f6f4f0',
        surface: '#ffffff',
        ink: '#1c1917',
        'ink-secondary': '#78716c',
        accent: '#b8860b',
        'accent-soft': '#f5ecd7',
        border: '#e7e5e4',
        'border-strong': '#d6d3d1',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Inter', 'system-ui', 'serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
