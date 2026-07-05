/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Quiet luxury palette - deep refined base with warm metallic accents
        velmora: {
          bg: '#F8F5F1',        // Warm cream background
          surface: '#F1EDE6',   // Slightly deeper cream for cards
          text: '#2C2522',      // Deep warm brown-black for text
          muted: '#6B6058',     // Muted warm gray for secondary text
          accent: '#8B7355',    // Warm bronze/gold accent
          gold: '#C5A46E',      // Rich gold metallic
          goldDark: '#9A7C4F',  // Darker gold for hover states
          border: '#D4C9B8',    // Warm hairline border
          white: '#FFFFFF',
          black: '#1A1614',     // Deep near-black
        },
      },
      letterSpacing: {
        'widest': '0.15em',
        'ultra': '0.2em',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
