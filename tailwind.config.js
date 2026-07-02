/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Quiet luxury palette for gold jewelry
        base: {
          50: '#FAF8F5',   // Warm off-white
          100: '#F5F2ED',  // Cream
          200: '#EDE8E0',  // Light warm gray
          300: '#D4CFC4',  // Muted warm gray
          800: '#2C2825',  // Deep warm charcoal
          900: '#1A1816',  // Rich dark base
        },
        gold: {
          400: '#D4B896',  // Light gold
          500: '#C5A46E',  // Warm gold accent
          600: '#B89778',  // Rich gold
          700: '#8C6F4D',  // Deep gold
        },
        accent: '#C5A46E',
        'accent-dark': '#8C6F4D',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest': '0.15em',
        'product': '0.08em',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.06)',
        'elegant': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'gold': '0 2px 12px rgba(197, 164, 110, 0.15)',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
