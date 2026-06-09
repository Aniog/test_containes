/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: '#050505',
        'void-light': '#0a0a0a',
        'industrial': '#121212',
        'industrial-border': '#262626',
        'industrial-muted': '#1a1a1a',
        'plasma-purple': '#9333ea',
        'plasma-blue': '#3b82f6',
        'plasma-cyan': '#06b6d4',
        'plasma-orange': '#f97316',
        'plasma-green': '#22c55e',
        'plasma-pink': '#ec4899',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
