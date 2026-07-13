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
          black: '#050810',
          deep: '#0a0f1e',
          card: '#0f1628',
          border: '#1e2a45',
          teal: '#00d4c8',
          cyan: '#38bdf8',
          violet: '#a78bfa',
          amber: '#fbbf24',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-teal': '0 0 30px rgba(0, 212, 200, 0.2)',
        'glow-violet': '0 0 30px rgba(167, 139, 250, 0.2)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
