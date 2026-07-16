/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velvet: {
          deep: '#0F0F0F',
          surface: '#1A1A1A',
          elevated: '#242424',
          cream: '#F5F0EB',
          taupe: '#A89F94',
          muted: '#6B6560',
          gold: '#C9A96E',
          'gold-light': '#E0C896',
          border: '#2A2A2A',
          'border-light': '#363636',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widewide: '0.15em',
        extrawide: '0.2em',
      },
    },
  },
  plugins: [],
}
