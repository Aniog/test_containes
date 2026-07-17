/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F2',
        ivory: '#F5F0E8',
        charcoal: '#1A1A1A',
        'warm-black': '#2C2825',
        champagne: '#D4AF37',
        'antique-gold': '#B8964C',
        'rose-gold': '#B76E79',
        stone: '#8B8580',
        pebble: '#E8E4DE',
        mist: '#F0EDE8',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest': '0.15em',
        'wider': '0.1em',
        'wide': '0.08em',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(44, 40, 37, 0.06)',
        'hover': '0 8px 32px rgba(44, 40, 37, 0.1)',
        'card': '0 2px 12px rgba(44, 40, 37, 0.04)',
      },
      maxWidth: {
        'container': '1400px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
}
