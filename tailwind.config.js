/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Velmora's refined color palette
        'velmora': {
          'cream': '#FAF8F5',      // Warm cream background
          'charcoal': '#2C2C2C',   // Deep refined base
          'gold': '#C9A96E',        // Warm metallic accent
          'gold-light': '#D4B87A',  // Light gold hover
          'gold-dark': '#B8945A',   // Dark gold active
          'warm-gray': '#8A8580',   // Warm secondary text
          'soft-beige': '#F5F0EB',  // Soft section background
          'border': '#E8E2DA',      // Hairline dividers
        }
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        'sans': ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.3em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'shimmer': 'shimmer 2s infinite',
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
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      boxShadow: {
        'premium': '0 4px 24px rgba(0, 0, 0, 0.06)',
        'premium-hover': '0 8px 32px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
