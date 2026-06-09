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
        industrial: '#121212',
        'border-gray': '#262626',
        'plasma-purple': '#a855f7',
        'laser-cyan': '#06b6d4',
        'solar-orange': '#f97316',
        'tritium-green': '#22c55e',
        'plasma-pink': '#ec4899',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
