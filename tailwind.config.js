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
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 1px 0 rgba(0, 0, 0, 0.02), 0 8px 24px rgba(0, 0, 0, 0.04)',
        'soft-hover': '0 1px 0 rgba(0, 0, 0, 0.03), 0 14px 32px rgba(0, 0, 0, 0.07)',
      },
    },
  },
  plugins: [],
}
