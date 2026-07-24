/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'warm-black': '#1C1917',
        'warm-charcoal': '#2E2A26',
        'warm-brown': '#3D3530',
        'cream': '#F5F0EB',
        'warm-white': '#FAF7F2',
        'gold': '#C9A96E',
        'gold-dark': '#A68B4B',
        'gold-light': '#D4B87A',
        'muted': '#8C8279',
        'muted-light': '#B5A99A',
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'product': '0.15em',
        'heading': '0.05em',
        'button': '0.1em',
      },
      maxWidth: {
        'content': '1280px',
      },
      boxShadow: {
        'warm-sm': '0 1px 3px rgba(28,25,23,0.08)',
        'warm-md': '0 4px 12px rgba(28,25,23,0.12)',
        'warm-lg': '0 8px 24px rgba(28,25,23,0.16)',
      },
    },
  },
  plugins: [],
}
