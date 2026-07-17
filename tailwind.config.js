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
        'ink-tertiary': '#a8a29e',
        accent: '#b8860b',
        'accent-soft': '#f5ecd7',
        border: '#e7e5e4',
        'border-strong': '#d6d3d1',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Times New Roman', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 1px 2px rgba(0, 0, 0, 0.04)',
        'lifted': '0 10px 30px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}
