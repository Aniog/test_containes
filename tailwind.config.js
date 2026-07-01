/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'game-bg':       '#0d0f14',
        'game-surface':  '#13161e',
        'game-card':     '#1a1d27',
        'game-elevated': '#21253a',
        'game-purple':   '#7c3aed',
        'game-cyan':     '#06b6d4',
        'game-red':      '#ef4444',
        'game-green':    '#22c55e',
        'game-amber':    '#f59e0b',
        'game-text':     '#f1f5f9',
        'game-muted':    '#94a3b8',
        'game-dim':      '#475569',
        'game-border':   '#2d3148',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
