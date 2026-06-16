/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        artitect: {
          ink: '#111827',
          graphite: '#1f2937',
          steel: '#5f6b7a',
          line: '#d8dee7',
          ivory: '#f7f3ec',
          panel: '#fffaf2',
          brass: '#c8913c',
          'brass-dark': '#a97828',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      boxShadow: {
        elegant: '0 24px 60px rgba(17, 24, 39, 0.12)',
        soft: '0 16px 40px rgba(17, 24, 39, 0.08)',
      },
    },
  },
  plugins: [],
}
