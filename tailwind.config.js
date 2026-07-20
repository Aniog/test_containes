/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F7F4EF',
        foreground: '#2A2721',
        muted: '#6F6A60',
        hairline: '#D9D3C9',
        accent: '#9C6F38',
        'accent-hover': '#7A562A',
        'accent-foreground': '#FFFFFF',
        surface: '#FFFFFF',
        cream: '#EDE8E0',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'extra-wide': '0.2em',
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(42, 39, 33, 0.08)',
        'lift': '0 12px 40px rgba(42, 39, 33, 0.12)',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
