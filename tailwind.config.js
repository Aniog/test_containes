/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Barlow Condensed"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        court: {
          black: '#0A0A0F',
          dark: '#111827',
          card: '#1A2235',
          border: '#1F2937',
        },
        hoop: {
          orange: '#F97316',
          'orange-dark': '#EA580C',
          'orange-glow': 'rgba(249,115,22,0.25)',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
