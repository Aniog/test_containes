/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'micro-teal': '#2dd4bf',
        'micro-cyan': '#22d3ee',
        'micro-purple': '#a855f7',
        'micro-emerald': '#34d399',
        'micro-dark': '#030712',
      },
      fontFamily: {
        'space': ['Space Grotesk', 'system-ui', 'sans-serif'],
        'inter': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
