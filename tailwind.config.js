/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Velmora palette: deep espresso base + warm champagne/gold accents
        velvet:    '#1A1410',   // near-black warm base
        espresso:  '#2C2118',   // dark warm brown
        bark:      '#4A3728',   // mid warm brown
        sand:      '#C8A97E',   // warm champagne gold
        champagne: '#E8D5B0',   // light champagne
        cream:     '#FAF6F0',   // off-white warm
        ivory:     '#F5EFE6',   // warm ivory
        blush:     '#E8C9A8',   // warm blush
        gold:      '#B8924A',   // rich gold accent
        'gold-light': '#D4AF6E', // lighter gold
        'gold-pale':  '#F0E0C0', // pale gold tint
        stone:     '#8B7355',   // warm stone
        mist:      '#D4C4B0',   // warm mist
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
      animation: {
        'fade-up':    'fadeUp 0.6s ease forwards',
        'fade-in':    'fadeIn 0.5s ease forwards',
        'slide-in':   'slideIn 0.4s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%':   { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
