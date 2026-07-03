/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Velmora brand colors - quiet luxury palette
        'velmora': {
          cream: '#FAF8F5',      // Warm cream background
          beige: '#F5EDE4',      // Light warm beige
          charcoal: '#2C2C2C',   // Deep charcoal (not pure black)
          gold: '#C9A96E',       // Warm gold accent
          'gold-light': '#D4B87A', // Lighter gold for hover
          'gold-dark': '#B8945A',  // Darker gold for active states
          warm: '#8B7355',        // Warm brown accent
          'text-primary': '#2C2C2C',
          'text-secondary': '#6B6B6B',
          'text-light': '#999999',
          border: '#E5E5E5',
          'border-light': '#F0F0F0',
        }
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'wider': '0.15em',
        'widest': '0.25em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'premium': '0 2px 20px rgba(0, 0, 0, 0.06)',
        'premium-lg': '0 4px 40px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
