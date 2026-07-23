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
        velvet:    '#1A1612',   // near-black warm base
        obsidian:  '#0F0D0B',   // deepest bg
        charcoal:  '#2C2520',   // card/surface
        mink:      '#4A3F38',   // muted border
        stone:     '#8A7D74',   // secondary text
        parchment: '#F5F0E8',   // light bg / off-white
        cream:     '#FAF7F2',   // page bg
        champagne: '#C9A96E',   // primary gold accent
        gold:      '#B8922A',   // deeper gold
        blush:     '#E8D5B7',   // soft warm highlight
        ivory:     '#FFFDF8',   // near-white
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
