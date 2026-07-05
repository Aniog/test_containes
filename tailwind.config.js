/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vbg: '#faf8f5',
        vdark: '#1c1c1c',
        vtext: '#1c1c1c',
        vmuted: '#6b6560',
        vcream: '#f5f0e8',
        vgold: '#b8964f',
        'vgold-hover': '#c9a96e',
        vborder: '#e8e2d9',
        vsurface: '#ffffff',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.25em',
      },
    },
  },
  plugins: [],
}
