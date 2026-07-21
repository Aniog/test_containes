/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Quiet luxury palette - warm, editorial
        'velmora-black': '#1a1a1a',
        'velmora-charcoal': '#2d2d2d',
        'velmora-warm-gray': '#f5f0eb',
        'velmora-cream': '#faf8f5',
        'velmora-gold': '#c9a96e',
        'velmora-gold-light': '#d4b87a',
        'velmora-gold-dark': '#b8945a',
        'velmora-text': '#333333',
        'velmora-text-light': '#666666',
        'velmora-border': '#e5e0db',
        'velmora-darker': '#111111',
        'velmora-taupe': '#a89f94',
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
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
        'premium': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'premium-lg': '0 10px 40px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
}
