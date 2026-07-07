/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        wide: '0.12em',
        wider: '0.2em',
        widest: '0.32em',
      },
      colors: {
        velmora: {
          // Deep warm base palette
          deep: '#1A1817',
          charcoal: '#2C2A29',
          warm: '#3D3833',

          // Neutral mid-tones
          stone: '#8A837C',
          sand: '#BFB8B0',
          creme: '#F5F0EB',
          ivory: '#FAF8F5',

          // Warm gold / metallic accents
          gold: '#C9A96E',
          goldLight: '#DBBF8A',
          goldDark: '#A68A4A',
          rose: '#B76E5E',

          // Accent
          accent: '#C9A96E',
          accentHover: '#DBBF8A',

          // Surfaces
          surface: '#FAF8F5',
          surfaceDark: '#2C2A29',
          border: '#E8E3DC',
          borderDark: '#3D3833',
        },
      },
    },
  },
  plugins: [],
}
