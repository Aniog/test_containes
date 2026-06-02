/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["'Space Mono'", 'monospace'],
      },
      colors: {
        'neo-black': '#000000',
        'neo-white': '#FFFFFF',
        'neo-off': '#F5F5F0',
        'neo-dim': '#1A1A1A',
        'neo-border': '#E8E8E0',
        'neo-yellow': '#FBC41A',
      },
      letterSpacing: {
        'widest-2': '0.2em',
        'widest-3': '0.3em',
      },
      gridTemplateColumns: {
        '12': 'repeat(12, 1fr)',
      },
    },
  },
  plugins: [],
}
