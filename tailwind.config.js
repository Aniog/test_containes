/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#1A1A1A',
        cream: '#FAF7F2',
        richBlack: '#0D0D0D',
        gold: {
          antique: '#C9A962',
          soft: '#E8DCC4',
          champagne: '#F5E6C8',
        },
        stone: {
          warm: '#8A8580',
          light: '#E5E0D8',
          offWhite: '#FDFCFA',
        },
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
        'hover': '0 8px 30px rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
}
