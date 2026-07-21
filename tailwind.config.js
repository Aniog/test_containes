/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'velmora': {
          cream: '#EDE8DF',
          gold: '#B8860B',
          'gold-light': '#C8960B',
          charcoal: '#2A2520',
          'charcoal-light': '#3D3630',
          warm: '#F5F0E8',
          muted: '#8A8070',
        }
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'wider': '0.15em',
        'widest': '0.25em',
      }
    },
  },
  plugins: [],
}
