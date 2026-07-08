/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Velmora quiet luxury palette
        velmora: {
          cream: '#FAF6F1',
          warm: '#F5EDE3',
          sand: '#E8DDD3',
          gold: '#C9A96E',
          goldLight: '#D4B87A',
          goldDark: '#A6884F',
          charcoal: '#2C2C2C',
          graphite: '#3D3D3D',
          ink: '#1A1A1A',
          stone: '#6B6560',
          mist: '#9A9590',
          blush: '#F0E6E1',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'wider': '0.15em',
        'widest': '0.25em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.7s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      boxShadow: {
        'premium': '0 2px 20px rgba(0,0,0,0.06)',
        'premium-lg': '0 8px 40px rgba(0,0,0,0.08)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A96E 0%, #D4B87A 50%, #C9A96E 100%)',
      }
    },
  },
  plugins: [require('tailwindcss-animate')],
}
