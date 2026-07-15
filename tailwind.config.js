/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF7F2',
        'warm-white': '#FFFFFF',
        charcoal: '#1A1A1A',
        'warm-gray': '#4A4543',
        'soft-gray': '#8A8583',
        hairline: '#E8E4DF',
        gold: {
          DEFAULT: '#C9A962',
          light: '#D4BC7E',
          dark: '#A68B4B',
        },
        blush: '#E8D5C4',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.15em',
        'product': '0.12em',
        'button': '0.08em',
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(26,26,26,0.06)',
        'medium': '0 4px 12px rgba(26,26,26,0.08)',
        'elevated': '0 8px 24px rgba(26,26,26,0.12)',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
