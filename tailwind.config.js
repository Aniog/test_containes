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
        charcoal: '#1A1A1A',
        'warm-black': '#0D0D0D',
        champagne: '#D4AF37',
        'soft-gold': '#E8D5A3',
        'rose-gold': '#B76E79',
        stone: '#8B8680',
        'light-stone': '#E5E2DD',
        ivory: '#FFFEF9',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest': '0.15em',
      },
      maxWidth: {
        'content': '1400px',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0,0,0,0.08)',
        'soft-hover': '0 8px 30px rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
}
