/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF9F6',
        foreground: '#1C1B1A',
        accent: {
          DEFAULT: '#B09460',
          foreground: '#FFFFFF'
        },
        muted: {
          DEFAULT: '#F2ECE4',
          foreground: '#5E5A54'
        },
        border: '#EAE5DB',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      }
    },
  },
  plugins: [],
}
