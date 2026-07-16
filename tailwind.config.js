/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#f6f0e8',
        surface: '#fffaf4',
        'surface-alt': '#241915',
        ink: '#1e1713',
        'ink-muted': '#6b5b50',
        line: '#dfd1c2',
        accent: '#b78d52',
        'accent-soft': '#ead9c0',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      boxShadow: {
        card: '0 18px 40px rgba(36, 25, 21, 0.08)',
        soft: '0 10px 30px rgba(36, 25, 21, 0.12)',
      },
      letterSpacing: {
        product: '0.28em',
      },
      transitionTimingFunction: {
        luxe: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      backgroundImage: {
        'hero-fade': 'linear-gradient(90deg, rgba(36, 25, 21, 0.82) 0%, rgba(36, 25, 21, 0.38) 52%, rgba(36, 25, 21, 0.18) 100%)',
      },
    },
  },
  plugins: [],
}
