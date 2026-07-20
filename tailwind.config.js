/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background, 0 0% 100%))',
        foreground: 'hsl(var(--foreground, 0 0% 10%))',
        primary: {
          DEFAULT: '#1a1a1a',
          foreground: '#fcfcfc',
        },
        accent: {
          DEFAULT: '#B4975A',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#f5f5f0',
          foreground: '#1a1a1a',
        },
        muted: {
          DEFAULT: '#f8f8f8',
          foreground: '#717171',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
      }
    },
  },
  plugins: [],
}
