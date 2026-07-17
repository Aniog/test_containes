/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'velmora-obsidian': '#1A1714',
        'velmora-charcoal': '#2C2825',
        'velmora-stone': '#3D3733',
        'velmora-cream': '#FAF7F2',
        'velmora-linen': '#F2EDE5',
        'velmora-mist': '#E8E2D9',
        'velmora-gold': '#C9A96E',
        'velmora-gold-light': '#DFC08A',
        'velmora-gold-dark': '#A8854A',
        'velmora-ink': '#1A1714',
        'velmora-slate': '#5C5550',
        'velmora-dust': '#9C9490',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.2em',
        'widest-2xl': '0.3em',
      },
      boxShadow: {
        'card-hover': '0 8px 32px rgba(26,23,20,0.08)',
        'drawer': '-8px 0 40px rgba(26,23,20,0.15)',
        'nav': '0 2px 20px rgba(26,23,20,0.08)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
