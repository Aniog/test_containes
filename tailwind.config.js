/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'qd-bg': '#F9F9F9',
        'qd-surface': '#FFFFFF',
        'qd-elevated': '#F0F2F5',
        'qd-accent': '#2563EB',
        'qd-cyan': '#0891B2',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      backgroundImage: {
        'blueprint-grid': `
          linear-gradient(rgba(37,99,235,0.07) 1px, transparent 1px),
          linear-gradient(90deg, rgba(37,99,235,0.07) 1px, transparent 1px),
          linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        'blueprint-grid': '80px 80px, 80px 80px, 20px 20px, 20px 20px',
      },
      aspectRatio: {
        'bento-wide': '16 / 9',
        'bento-tall': '3 / 4',
        'bento-square': '1 / 1',
      },
    },
  },
  plugins: [],
}
