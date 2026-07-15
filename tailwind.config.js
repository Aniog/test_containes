/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        charcoal: '#1A1A1A',
        cream: '#FAF7F2',
        richBlack: '#0D0D0D',
        
        // Accent Colors
        gold: {
          DEFAULT: '#C9A962',
          soft: '#E8DCC4',
          muted: '#8B7355',
        },
        
        // Neutral Colors
        warmGray: '#6B6560',
        lightGray: '#E5E0DB',
        offWhite: '#FDFCFA',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest': '0.15em',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'soft-hover': '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}
