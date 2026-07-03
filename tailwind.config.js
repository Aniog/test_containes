/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F7F5F1',
        foreground: '#1A1816',
        muted: '#9B958D',
        accent: '#A67B5B',
        'accent-hover': '#8C6649',
        surface: '#FFFFFF',
        'surface-muted': '#EDEAE4',
        border: '#D9D5CE',
        success: '#5A7D5A',
        star: '#C8A45C',
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", 'Georgia', 'serif'],
        sans: ["'Inter'", 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        product: '0.12em',
      },
      boxShadow: {
        card: '0 8px 32px rgba(26, 24, 22, 0.08)',
        subtle: '0 2px 8px rgba(26, 24, 22, 0.04)',
      },
    },
  },
  plugins: [],
}
