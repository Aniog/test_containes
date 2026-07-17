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
        velvet:    '#1A1714',   // near-black warm base
        obsidian:  '#2C2825',   // card/surface dark
        mink:      '#3D3733',   // subtle borders / dividers
        stone:     '#7A736C',   // muted body text
        parchment: '#F5F0E8',   // off-white page background
        cream:     '#FAF7F2',   // card / section bg
        champagne: '#C9A96E',   // primary gold accent
        gold:      '#B8924A',   // deeper gold hover
        blush:     '#E8D5B7',   // soft warm highlight
        ivory:     '#FFFDF9',   // pure light surface
      },
      fontFamily: {
        serif:  ['Cormorant Garamond', 'Georgia', 'serif'],
        sans:   ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.35em',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
}
