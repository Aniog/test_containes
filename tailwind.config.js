/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velmora: {
          base: '#1C1917',
          surface: '#FAF7F2',
          cream: '#F5EFE6',
          gold: '#C9A96E',
          goldLight: '#D4B87A',
          goldDark: '#A8894A',
          textPrimary: '#1C1917',
          textSecondary: '#6B6560',
          textOnDark: '#FAF7F2',
          textMutedOnDark: '#A39E97',
          divider: '#E8E2D9',
          dividerDark: '#3D3833',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
