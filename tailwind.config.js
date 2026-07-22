/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'velmora-cream': '#FAF7F2',
        'velmora-sand': '#E8E0D5',
        'velmora-taupe': '#8B7E74',
        'velmora-charcoal': '#2D2926',
        'velmora-espresso': '#1C1917',
        'velmora-gold': '#C9A962',
        'velmora-gold-light': '#D4BC7C',
        'velmora-gold-dark': '#A68B3D',
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultrawide': '0.25em',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
