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
        'surface-alt': '#f1ede6',
        ink: '#1c1917',
        'ink-secondary': '#78716c',
        'ink-muted': '#a8a29e',
        accent: '#b8860b',
        'accent-soft': '#d4af37',
        border: '#e7e5e4',
        'border-soft': '#f0ece6',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 0 rgba(0,0,0,0.02), 0 8px 24px rgba(0,0,0,0.04)',
      },
    },
  },
  plugins: [],
}
