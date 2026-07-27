/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-space': '#050a14',
        'dark-navy': '#0a1628',
        'midnight': '#0f1f3d',
        'teal-glow': '#00d4c8',
        'violet-pulse': '#7c3aed',
        'biolume': '#39ff14',
        'soft-white': '#e8f4f8',
        'muted-blue': '#8ba7c7',
        'amber-glow': '#f59e0b',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
