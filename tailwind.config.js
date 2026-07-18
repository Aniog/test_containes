/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF8F5',
        foreground: '#1C1917',
        accent: '#C9A96E',
        'accent-hover': '#B8956A',
        muted: '#78716C',
        'muted-light': '#A8A29E',
        border: '#E7E5E4',
        card: '#FFFFFF',
        'dark-bg': '#2C2420',
        'dark-fg': '#FAF8F5',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.15em',
      },
      transitionTimingFunction: {
        'drawer': 'cubic-bezier(0.25, 0.8, 0.25, 1)',
      },
    },
  },
  plugins: [],
}
