/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#1a1814',
          surface: '#f7f5f0',
          surfaceAlt: '#edeae3',
          gold: '#c9a96e',
          goldDark: '#b8944c',
          goldLight: '#e3d3b3',
          text: '#1a1814',
          textMuted: '#6b6560',
          border: '#e3dfd6',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.25em',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
