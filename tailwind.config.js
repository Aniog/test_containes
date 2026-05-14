/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep': '#050a0f',
        'navy': '#0d1b2a',
        'card-dark': '#0f1f30',
        'cyan-glow': '#00d4ff',
        'violet-glow': '#7c3aed',
        'neon-green': '#00ffcc',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 30px rgba(0, 212, 255, 0.2)',
        'glow-violet': '0 0 30px rgba(124, 58, 237, 0.2)',
      },
    },
  },
  plugins: [],
}
