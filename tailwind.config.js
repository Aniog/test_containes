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
          deeper: '#060912',
          surface: '#111827',
          card: '#1a2235',
          cyan: '#06d6a0',
          'cyan-light': '#34ebc6',
          purple: '#7c3aed',
          'purple-light': '#a78bfa',
          magenta: '#ec4899',
          'magenta-light': '#f472b6',
          text: '#f8fafc',
          muted: '#94a3b8',
          border: '#1e293b',
        },
      },
    },
  },
  plugins: [],
}
