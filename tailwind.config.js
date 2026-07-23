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
        'velmora-espresso': '#2C2420',
        'velmora-stone': '#3D3530',
        'velmora-linen': '#F5F0E8',
        'velmora-cream': '#FAF7F2',
        'velmora-sand': '#E8DDD0',
        'velmora-gold': '#C9A96E',
        'velmora-gold-light': '#DFC08A',
        'velmora-gold-muted': '#A8895A',
        'velmora-text-dark': '#1A1714',
        'velmora-text-mid': '#5C4F45',
        'velmora-text-light': '#F5F0E8',
        'velmora-text-muted': '#9C8B7E',
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        manrope: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.2em',
        'widest-lg': '0.15em',
        'widest-md': '0.12em',
        'widest-sm': '0.08em',
      },
      boxShadow: {
        'card': '0 4px 24px rgba(26,23,20,0.08)',
        'card-hover': '0 8px 32px rgba(26,23,20,0.14)',
        'drawer': '-4px 0 40px rgba(26,23,20,0.18)',
      },
      transitionTimingFunction: {
        'out-smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [],
}
