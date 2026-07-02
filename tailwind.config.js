/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        velmora: {
          bg: '#F8F5F1',        // Warm cream background
          surface: '#FFFFFF',   // Pure white
          ink: '#2C2522',       // Deep warm brown-black
          muted: '#6B6058',     // Muted taupe for secondary text
          gold: '#B89778',      // Warm refined gold
          goldDark: '#8C6F52',  // Darker gold for hover
          accent: '#C5A880',    // Soft metallic accent
          border: '#E5DFD6',    // Hairline divider
          overlay: 'rgba(44, 37, 34, 0.6)', // For overlays
        },
      },
      letterSpacing: {
        'widest': '0.15em',
        'wider': '0.08em',
      },
    },
  },
  plugins: [],
}
