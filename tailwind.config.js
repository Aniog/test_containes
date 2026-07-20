/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velmora: {
          ivory: '#F8F3EA',
          porcelain: '#FFFDF8',
          mink: '#D8C7B3',
          truffle: '#7A604E',
          espresso: '#211814',
          champagne: '#E7D5B5',
          gold: '#B4894B',
          olive: '#2C3128',
          blush: '#EFE2DA',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        velvet: '0 22px 60px rgba(33, 24, 20, 0.12)',
        whisper: '0 12px 32px rgba(33, 24, 20, 0.08)',
      },
      letterSpacing: {
        editorial: '0.18em',
        luxury: '0.22em',
        atelier: '0.24em',
        logo: '0.28em',
        hero: '0.32em',
      },
      fontSize: {
        micro: ['0.65rem', { lineHeight: '1rem' }],
        eyebrow: ['0.68rem', { lineHeight: '1rem' }],
      },
      aspectRatio: {
        portrait: '4 / 5',
      },
      minHeight: {
        hero: '92vh',
        story: '420px',
        empty: '360px',
      },
      height: {
        reel: '420px',
        'reel-lg': '500px',
      },
      minWidth: {
        reel: '235px',
        'reel-lg': '280px',
      },
      gridTemplateColumns: {
        cart: '88px 1fr',
        footer: '1.25fr 2fr',
        shop: '280px 1fr',
        product: '1.1fr 0.9fr',
        gallery: '92px 1fr',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 700ms ease-out both',
      },
    },
  },
  plugins: [],
}
