/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'void': '#050505',
        'industrial': '#121212',
        'border-dark': '#262626',
        'muted-border': '#3a3a3a',
        'text-secondary': '#A0A0A0',
        'text-tertiary': '#606060',
        'signal-green': '#00FF88',
        'signal-amber': '#FFB800',
      },
      fontFamily: {
        'grotesk': ['Space Grotesk', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-2': '0.25em',
      },
    },
  },
  plugins: [],
}
