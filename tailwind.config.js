/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#0a0e1a',
        surface: '#111827',
        'surface-light': '#1f2937',
        primary: '#06b6d4',
        secondary: '#8b5cf6',
        accent: '#10b981',
        'text-primary': '#f1f5f9',
        'text-secondary': '#94a3b8',
        glow: '#22d3ee',
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
