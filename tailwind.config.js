/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ['Space Grotesk', 'system-ui', 'sans-serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        cosmos: {
          950: '#020617',
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
        },
      },
      backgroundImage: {
        'radial-teal': 'radial-gradient(ellipse at center, rgba(45,212,191,0.08) 0%, transparent 70%)',
        'radial-cyan': 'radial-gradient(ellipse at center, rgba(34,211,238,0.06) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
}
