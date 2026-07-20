/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velmora: {
          cream: '#FAF7F2',
          charcoal: '#1A1A1A',
          gold: '#C9A962',
          'gold-light': '#E8D5A8',
          sand: '#F0EBE3',
          'warm-gray': '#6B6560',
          white: '#FFFFFF',
          border: '#E8E5E0',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest': '0.15em',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0,0,0,0.06)',
        'hover': '0 8px 30px rgba(0,0,0,0.1)',
      }
    },
  },
  plugins: [],
}
