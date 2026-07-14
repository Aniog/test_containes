/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2C2420',
        secondary: '#F8F5F0',
        accent: {
          DEFAULT: '#C9A86C',
          hover: '#B8964D',
        },
        background: '#FDFCFA',
        'text-primary': '#2C2420',
        'text-secondary': '#6B635B',
        border: '#E8E2DB',
        success: '#7A9B76',
        error: '#C27B7B',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      transitionDuration: {
        '400': '400ms',
        '500': '500ms',
      },
    },
  },
  plugins: [],
}
