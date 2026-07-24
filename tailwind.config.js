/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: '#1C1917',
        surface: '#FAF7F2',
        surfaceAlt: '#F5EFE6',
        foreground: '#2C2420',
        foregroundMuted: '#8C7E72',
        accent: '#C8A96E',
        accentHover: '#B8944E',
        accentLight: '#E8D5B0',
        hairline: '#E8D5B0',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1280px',
      },
      letterSpacing: {
        widest: '0.2em',
      },
    },
  },
  plugins: [],
}
