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
          bg: '#FDF8F3',
          fg: '#1C1814',
          muted: '#F5EFE6',
          'muted-fg': '#8A8278',
          gold: '#C9A96E',
          'gold-hover': '#B8944F',
          border: '#E8DFD3',
          card: '#FFFFFF',
        },
      },
      fontFamily: {
        heading: ['Cormorant Garamond', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        wide: '0.08em',
        wider: '0.12em',
        widest: '0.2em',
      },
    },
  },
  plugins: [],
}
