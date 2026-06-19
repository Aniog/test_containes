/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#faf8f5',
        surface: '#ffffff',
        fg: '#1a1412',
        'muted-fg': '#6b5e54',
        muted: '#f0ece6',
        border: '#e5ded5',
        accent: '#b8960c',
        'accent-hover': '#9a7d0a',
        'accent-fg': '#ffffff',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'product': '0.2em',
        'logo': '0.3em',
      },
      transitionDuration: {
        '250': '250ms',
      },
    },
  },
  plugins: [],
}
