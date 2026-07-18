/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(30, 20%, 98%)',
        foreground: 'hsl(30, 15%, 12%)',
        card: 'hsl(30, 25%, 96%)',
        'card-foreground': 'hsl(30, 15%, 12%)',
        border: 'hsl(30, 10%, 85%)',
        muted: 'hsl(30, 10%, 90%)',
        'muted-foreground': 'hsl(30, 5%, 45%)',
        accent: '#c9a03a',
        'accent-foreground': '#ffffff',
        ring: '#c9a03a',
        warm: {
          50: '#fdf8f0',
          100: '#f9eddb',
          200: '#f2d9b5',
          300: '#e9bf86',
          400: '#dca155',
          500: '#c9a03a',
          600: '#b0872f',
          700: '#926b29',
          800: '#785627',
          900: '#634822',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.5rem',
      },
      letterSpacing: {
        widest: '0.15em',
      }
    },
  },
  plugins: [],
}
