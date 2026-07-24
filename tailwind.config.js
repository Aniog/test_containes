/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: '#1A1A1A',
          foreground: '#FAFAFA',
        },
        accent: {
          DEFAULT: '#C5A059',
          foreground: '#1A1A1A',
        },
        muted: {
          DEFAULT: '#F5F5F5',
          foreground: '#717171',
        },
        border: 'var(--border)',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        'hairline': '0.5px',
      },
    },
  },
  plugins: [],
}
