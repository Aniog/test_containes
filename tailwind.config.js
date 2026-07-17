/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Velmora palette — deep warm charcoal base + champagne gold accents
        velvet:    '#1C1814',   // near-black warm base
        obsidian:  '#2A2420',   // card/surface dark
        mink:      '#3D3530',   // borders, dividers
        stone:     '#7A6E68',   // muted text
        parchment: '#F5F0E8',   // off-white background
        cream:     '#FAF7F2',   // lightest surface
        champagne: '#C9A96E',   // primary gold accent
        gold:      '#B8924A',   // deeper gold
        blush:     '#E8D5B7',   // soft warm highlight
      },
      fontFamily: {
        serif:  ['Cormorant Garamond', 'Georgia', 'serif'],
        sans:   ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.35em',
      },
      transitionTimingFunction: {
        luxury: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [],
}
