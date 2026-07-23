/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navyBlack: '#0f1923',
        darkSlate: '#1a2535',
        steelBorder: '#2a3a50',
        accentGold: '#c9a84c',
        accentLight: '#e8c97a',
        warmWhite: '#f0ece4',
        mutedBlue: '#9aabb8',
        dimGrey: '#5a7080',
        terracotta: '#e05c3a',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
