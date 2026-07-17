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
          'gold': '#C9A96E',        // Warm gold accent
          'gold-light': '#D4B87A',  // Lighter gold for hover
          'gold-dark': '#B8945A',   // Darker gold for active states
          'cream': '#FAF8F5',       // Warm off-white background
          'charcoal': '#1A1A1A',    // Deep base for text/footer
          'graphite': '#2D2D2D',    // Secondary dark
          'warm-gray': '#8A8580',   // Muted secondary text
          'soft-beige': '#F5F0EB',  // Card backgrounds
          'border': '#E8E4DF',      // Subtle dividers
        }
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        'sans': ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
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
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      boxShadow: {
        'premium': '0 2px 20px rgba(0, 0, 0, 0.08)',
        'premium-lg': '0 4px 40px rgba(0, 0, 0, 0.12)',
      },
      transitionProperty: {
        'premium': 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }
    },
  },
  plugins: [require('tailwindcss-animate')],
}
