/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0B2A4A',
        steel: '#1E5F8E',
        amber: {
          DEFAULT: '#E08A1E',
          dark: '#B86F12',
        },
        verified: '#1F8A57',
        canvas: '#F5F7FA',
        ink: '#0F1B2D',
        muted: '#5A6B7E',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      maxWidth: {
        content: '1280px',
      },
    },
  },
  plugins: [],
}
