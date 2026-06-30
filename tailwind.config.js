/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: '#1C1917',
        cream: '#FAF8F5',
        gold: '#C9A962',
        'gold-hover': '#b89a52',
        muted: '#78716C',
        hairline: '#E7E5E4',
        overlay: 'rgba(28,25,23,0.45)',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.12em',
        wider: '0.05em',
      },
      transitionTimingFunction: {
        'editorial': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(28,25,23,0.06)',
        'card-hover': '0 8px 24px rgba(28,25,23,0.08)',
      },
    },
  },
  plugins: [],
}
