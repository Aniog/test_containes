/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cosmos: {
          dark: '#0a0e1a',
          deeper: '#060a14',
          card: '#111827',
          cyan: '#06d6a0',
          purple: '#7c3aed',
          pink: '#ec4899',
          text: '#f1f5f9',
          muted: '#94a3b8',
          border: '#1e293b',
        },
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
