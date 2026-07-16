/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#1A1A1A',
          foreground: '#FFFFFF',
        },
        accent: {
          DEFAULT: '#C5A059',
          foreground: '#FFFFFF',
        },
        muted: {
          DEFAULT: '#F5F5F0',
          foreground: '#666666',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Manrope', 'sans-serif'],
      },
      letterSpacing: {
        'widest-plus': '0.2em',
      }
    },
  },
  plugins: [],
}
