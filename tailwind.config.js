/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#fbfaf8',
        foreground: '#1a1a1a',
        muted: '#f5f5f5',
        'muted-foreground': 'rgba(26, 26, 26, 0.7)',
        accent: '#c9a96e',
        'accent-foreground': '#ffffff',
        border: '#f0f0f0',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
