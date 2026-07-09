/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#1A1714',
        charcoal: '#2C2825',
        stone: '#4A4540',
        ivory: '#FAF7F2',
        linen: '#F2EDE5',
        sand: '#E8DFD0',
        gold: '#C9A96E',
        'gold-light': '#DFC08A',
        'gold-dark': '#A8854A',
        ink: '#1A1714',
        muted: '#7A6E65',
        whisper: '#B5A99A',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.2em',
        'widest-lg': '0.15em',
        'widest-md': '0.12em',
        'widest-sm': '0.08em',
      },
      transitionDuration: {
        350: '350ms',
      },
      boxShadow: {
        'card-hover': '0 8px 32px rgba(26,23,20,0.08)',
        'drawer': '-4px 0 24px rgba(26,23,20,0.12)',
        'subtle': '0 2px 12px rgba(26,23,20,0.06)',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
}
