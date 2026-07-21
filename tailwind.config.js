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
        heading: '#2C2420',
        accent: '#B8860B',
        'accent-hover': '#9A7209',
        muted: '#6B5E54',
        border: '#E8E0D4',
        dark: '#2C2420',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        product: '0.12em',
      },
    },
  },
  plugins: [],
}
