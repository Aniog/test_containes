/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: '#0F0D0D',
        surface: '#1A1717',
        accent: '#C9A87C',
        'accent-hover': '#D4BA94',
        primary: '#F5F0EB',
        secondary: '#B8AEA4',
        muted: '#7A7269',
        hairline: '#2A2624',
        'light-surface': '#FAF7F4',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
