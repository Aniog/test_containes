/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF7F2',
        foreground: '#1A1A1A',
        accent: {
          DEFAULT: '#B8860B',
          hover: '#9A7209',
          foreground: '#FAF7F2',
        },
        muted: {
          DEFAULT: '#F5F0E8',
          foreground: '#6B6358',
        },
        border: '#E8E0D4',
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#1A1A1A',
        },
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
