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
          base: '#1A1514',
          surface: '#F5F0EB',
          card: '#FFFFFF',
          accent: '#C8A15E',
          'accent-hover': '#B08A4A',
          muted: '#8B8580',
          border: '#E5E0D9',
          success: '#5B8469',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.15em',
      },
    },
  },
  plugins: [],
}
