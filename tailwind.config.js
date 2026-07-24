/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Quiet luxury palette - warm, editorial, elegant
        velmora: {
          cream: '#FAF7F2',      // Warm cream background
          sand: '#E8E0D5',        // Soft sand accent
          charcoal: '#2C2C2C',    // Deep charcoal (not pure black)
          gold: '#B8956A',        // Warm gold accent
          goldLight: '#D4B896',   // Light gold for hover states
          goldDark: '#8A6D4A',    // Dark gold for active states
          ivory: '#FFFFF0',       // Pure ivory for text on dark
          stone: '#9C9C9C',       // Muted stone for secondary text
          mist: '#F5F0EB',        // Light mist for subtle backgrounds
        }
      },
      fontFamily: {
        'display': ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        'body': ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.3em',
        'wide': '0.2em',
        'wider': '0.15em',
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
        'premium': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'premium-lg': '0 10px 40px rgba(0, 0, 0, 0.12)',
      }
    },
  },
  plugins: [require('tailwindcss-animate')],
}
