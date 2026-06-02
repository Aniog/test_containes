/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'clay-white': '#F5F0E8',
        'warm-white': '#FAF7F2',
        'sage': '#7A9E7E',
        'deep-sage': '#4A6741',
        'moss': '#3D5C3A',
        'bark': '#8B7355',
        'parchment': '#E8E0D0',
        'charcoal': '#2C2C2C',
        'neo-red': '#EB1B1A',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        'widest-2': '0.2em',
        'widest-3': '0.3em',
      },
      transitionDuration: {
        '700': '700ms',
        '900': '900ms',
      },
      aspectRatio: {
        'golden': '1.618 / 1',
        'golden-portrait': '1 / 1.618',
      },
    },
  },
  plugins: [],
}
