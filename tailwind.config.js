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
        accent: {
          DEFAULT: '#B8860B',
          hover: '#9A7209',
        },
        muted: {
          DEFAULT: '#6B6560',
          light: '#E8E2DA',
        },
        dark: {
          DEFAULT: '#1A1A1A',
          muted: '#A39E99',
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
