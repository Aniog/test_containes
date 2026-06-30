/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: '#1a1612',
        surface: '#f7f3ee',
        card: '#ffffff',
        gold: '#c9a96e',
        'gold-dark': '#a88b52',
        'rose-gold': '#d4a5a5',
        'text-primary': '#1a1612',
        'text-secondary': '#6b6560',
        'text-muted': '#9a948e',
        'text-inverse': '#f7f3ee',
        hairline: '#e5e0d8',
        'hairline-dark': '#2d2823',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.15em',
        wider: '0.1em',
        wide: '0.05em',
      },
      maxWidth: {
        'container': '1280px',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
