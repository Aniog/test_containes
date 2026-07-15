/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Velmora palette — deep charcoal base + warm champagne/gold accents
        velvet:    '#1A1714',   // near-black warm base
        obsidian:  '#2C2825',   // card/surface dark
        mink:      '#3D3733',   // subtle borders / dividers
        stone:     '#7A736C',   // muted body text
        parchment: '#F5F0E8',   // off-white page bg
        cream:     '#FAF7F2',   // card bg / light surface
        champagne: '#C9A96E',   // primary gold accent
        gold:      '#B8924A',   // deeper gold hover
        blush:     '#E8D5B7',   // soft warm highlight
        ivory:     '#FFFDF9',   // pure light
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
