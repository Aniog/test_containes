/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        background: '#FAF9F6', // Very faint warm off-white
        foreground: '#1c1917', // Very dark gray for text
        primary: '#C5A059', // Warm metallic gold accent
        'primary-foreground': '#FFFFFF',
        muted: '#EFEBE2', // slightly darker neutral
        'muted-foreground': '#78716c',
        border: '#E6E2D8',
      }
    },
  },
  plugins: [],
}
