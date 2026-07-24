/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'velmora-obsidian': '#1A1614',
        'velmora-charcoal': '#2C2420',
        'velmora-mink': '#3D3330',
        'velmora-cream': '#F5EFE6',
        'velmora-linen': '#EDE4D8',
        'velmora-sand': '#D4C4B0',
        'velmora-gold': '#C9A96E',
        'velmora-gold-light': '#E2C98A',
        'velmora-gold-dark': '#A8854A',
        'velmora-text-dark': '#1A1614',
        'velmora-text-muted': '#6B5E54',
        'velmora-text-light': '#F5EFE6',
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.2em',
        'widest-2xl': '0.3em',
      },
      boxShadow: {
        'card': '0 4px 24px rgba(26,22,20,0.08)',
        'card-hover': '0 8px 40px rgba(26,22,20,0.14)',
        'drawer': '-4px 0 40px rgba(26,22,20,0.18)',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [],
}
