/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        microbg: '#050d1a',
        microsurface: '#0d1f35',
        microelevated: '#112540',
        microteal: '#00c9b1',
        micropurple: '#7c3aed',
        microglow: '#00e5cc',
        microtext: '#e8f4f8',
        micromuted: '#7fb3c8',
        microdim: '#4a7a8a',
        microborder: '#1a3a52',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
