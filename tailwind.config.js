/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm luxury palette for gold jewelry
        'velmora': {
          'cream': '#FAF7F2',
          'warm': '#F5EDE3',
          'taupe': '#E8DDD4',
          'gold': '#C9A96E',
          'gold-light': '#D4B87A',
          'gold-dark': '#B8945A',
          'charcoal': '#2A2A28',
          'slate': '#3D3D3A',
          'muted': '#6B6B68',
          'soft': '#9A9A97',
        }
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        'wide': '0.15em',
        'wider': '0.25em',
        'widest': '0.35em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
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
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      boxShadow: {
        'luxury': '0 4px 20px rgba(201, 169, 110, 0.1)',
        'luxury-lg': '0 10px 40px rgba(201, 169, 110, 0.15)',
      },
      transitionProperty: {
        'luxury': 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
