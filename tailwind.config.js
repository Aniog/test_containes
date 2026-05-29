/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cosmos: {
          bg: '#050a0f',
          surface: '#0d1b2a',
          elevated: '#112233',
          teal: '#00d4aa',
          purple: '#7c3aed',
          amber: '#f59e0b',
          text: '#e8f4f8',
          muted: '#8ab4c4',
          dim: '#4a6a7a',
        },
      },
      fontFamily: {
        grotesk: ['"Space Grotesk"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
