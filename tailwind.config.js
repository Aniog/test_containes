/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'microcosmos': {
          'navy': '#0a0e27',
          'dark': '#111827',
          'teal': '#00d4aa',
          'purple': '#7c3aed',
          'blue': '#3b82f6',
          'green': '#10b981',
          'red': '#ef4444',
          'orange': '#f59e0b',
          'cyan': '#06b6d4',
        }
      },
      fontFamily: {
        'inter': ['Inter', 'system-ui', 'sans-serif'],
        'space': ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'rotate-slow': 'rotate-slow 20s linear infinite',
      },
    },
  },
  plugins: [],
}
