/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Velmora palette — deep espresso base + warm champagne/gold accents
        velvet:    '#1A1410',   // near-black warm base
        espresso:  '#2C1F14',   // deep brown
        bark:      '#4A3728',   // mid brown
        sand:      '#C8A97E',   // warm champagne gold
        champagne: '#E8D5B0',   // light champagne
        cream:     '#FAF6F0',   // off-white background
        ivory:     '#F5EFE6',   // card background
        mist:      '#EDE6DC',   // subtle divider
        gold:      '#B8924A',   // accent gold
        'gold-light': '#D4AF6E', // lighter gold for hover
        'gold-dark':  '#8B6B35', // darker gold
        charcoal:  '#3D3530',   // body text
        stone:     '#7A6A5A',   // muted text
        pebble:    '#A89880',   // placeholder text
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
