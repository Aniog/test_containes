/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Space Mono"', 'monospace'],
      },
      colors: {
        'nf-black': '#0A0A0A',
        'nf-white': '#FFFFFF',
        'nf-red': '#FF2D00',
        'nf-muted': '#6B6B6B',
        'nf-gray': '#E8E8E8',
        'nf-yellow': '#939323',
      },
      letterSpacing: {
        'widest-xl': '0.3em',
        'widest-lg': '0.25em',
        'widest-md': '0.15em',
      },
      gridTemplateAreas: {
        'collections': '"a a b" "c d d" "e e f"',
        'collections-sm': '"a" "b" "c" "d" "e" "f"',
      },
    },
  },
  plugins: [],
}
