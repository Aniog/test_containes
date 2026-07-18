/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'velmora-ink': '#221c1a',
        'velmora-cream': '#f6f0ea',
        'velmora-panel': '#fffaf6',
        'velmora-gold': '#c7a66a',
        'velmora-mist': '#d9cbbd',
        'velmora-muted': '#6e5d53',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 50px rgba(34, 28, 26, 0.08)',
        glow: '0 18px 40px rgba(199, 166, 106, 0.18)',
      },
      letterSpacing: {
        luxe: '0.28em',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
