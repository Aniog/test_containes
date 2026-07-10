/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Velmora palette: deep warm charcoal base + warm ivory + gold accent
        velvet: {
          DEFAULT: '#1C1814',  // deep warm charcoal
          50:  '#F9F6F2',
          100: '#F0EAE0',
          200: '#DDD0BE',
          300: '#C8B49A',
          400: '#B09878',
          500: '#967C5A',
          600: '#7A6245',
          700: '#5E4A33',
          800: '#3D3025',
          900: '#1C1814',
        },
        ivory: {
          DEFAULT: '#FAF7F2',
          50:  '#FDFCFA',
          100: '#FAF7F2',
          200: '#F2EBE0',
          300: '#E8DECE',
        },
        gold: {
          DEFAULT: '#C9A96E',
          light:   '#E2C98A',
          dark:    '#A07840',
          muted:   '#D4B98A',
        },
        stone: {
          warm: '#8C7B6B',
          mid:  '#6B5C4E',
        },
      },
      fontFamily: {
        serif:  ['Cormorant Garamond', 'Georgia', 'serif'],
        sans:   ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.35em',
      },
      transitionTimingFunction: {
        luxury: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
    },
  },
  plugins: [],
}
