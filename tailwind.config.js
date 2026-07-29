/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: '#10233f',
          slate: '#46556f',
          muted: '#6f7f99',
          line: '#d8e0ea',
          surface: '#f4f7fb',
          sky: '#e7f1fb',
          blue: '#1f5eff',
          'blue-strong': '#1849c6',
          teal: '#0f8b8d',
          gold: '#b78628',
        },
      },
      boxShadow: {
        card: '0 18px 45px -28px rgba(16, 35, 63, 0.28)',
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
}
