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
          gold:      '#C8A96E',
          goldLight: '#E8D5A3',
          goldDark:  '#9B7D4A',
          cream:     '#FBF7F0',
          sand:      '#F0EBE3',
          charcoal:  '#1C1C1C',
          smoke:     '#3D3D3D',
          stone:     '#6B6B6B',
          mist:      '#A8A8A8',
          border:    '#E5E0D8',
          surface:   '#F6F2EC',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
        wider: '0.08em',
      },
    },
  },
  plugins: [],
}
