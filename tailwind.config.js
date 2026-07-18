/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F2',
        charcoal: '#1A1A1A',
        bronze: '#8B6914',
        'bronze-dark': '#6B5010',
        muted: '#6B6560',
        hairline: '#E8E2DA',
        surface: '#FFFFFF',
        dark: '#1A1A1A',
        'dark-muted': '#A39E98',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest': '0.15em',
        'wider': '0.08em',
      },
    },
  },
  plugins: [],
}
