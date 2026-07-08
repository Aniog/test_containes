/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-brand-accent',
    'hover:bg-brand-accentHover',
    'bg-brand-ink',
    'text-brand-ink',
    'text-brand-accent',
    'border-brand-line',
    'bg-brand-surface',
    'bg-brand-bg',
    'bg-brand-warm',
    'text-brand-muted',
    'text-brand-subtle',
    'border-brand-ink',
    'hover:bg-brand-ink',
    'hover:text-brand-accent',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#F6F3EE',
          surface: '#FFFFFF',
          ink: '#1C1917',
          muted: '#78716C',
          subtle: '#A8A29E',
          line: '#E7E5E4',
          accent: '#B45309',
          accentHover: '#92400E',
          warm: '#F5F0E8',
          dark: '#1C1917',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.18em',
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(to bottom, rgba(28,25,23,0.25), rgba(28,25,23,0.55))",
      }
    },
  },
  plugins: [],
}
