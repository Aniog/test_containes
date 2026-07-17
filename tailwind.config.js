/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cream:    '#FAF7F2',
          sand:     '#EAE0D5',
          warm:     '#D4C4B0',
          gold:     '#B8945C',
          deepgold: '#8B6B3D',
          bronze:   '#6B4F2E',
          ink:      '#1C1A18',
          charcoal: '#2D2A27',
          smoke:    '#5C5853',
          pearl:    '#F5F0EB',
          blush:    '#EDE4DB',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'product': '0.15em',
        'hero': '0.05em',
      },
    },
  },
  plugins: [],
}
