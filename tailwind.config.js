/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'micro-bg': '#050d12',
        'micro-bg2': '#0a1a24',
        'micro-card': '#0f2233',
        'micro-teal': '#00c9b1',
        'micro-border': '#1a3a4a',
        'micro-text': '#e8f4f8',
        'micro-muted': '#7fb3c8',
        'micro-dim': '#4a7a8a',
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
