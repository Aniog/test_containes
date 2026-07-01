/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'velmora-gold': '#D4AF37',
        'velmora-cream': '#F9F6F1',
        'velmora-charcoal': '#1A1A1A',
        'velmora-sand': '#E5E0D8',
        'velmora-accent': '#C5A028',
        'background': '#F9F6F1',
        'foreground': '#1A1A1A',
        'primary': '#1A1A1A',
        'primary-foreground': '#F9F6F1',
        'muted': '#E5E0D8',
        'muted-foreground': '#666666',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        'widest': '.25em',
      }
    },
  },
  plugins: [],
}
