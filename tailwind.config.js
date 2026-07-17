/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0a0f0d',
        'ink-soft': '#121a17',
        'ink-line': '#1f2b27',
        mist: '#e8f1ee',
        'mist-dim': '#9fb3ac',
        'emerald-glow': '#3ddc97',
        'amber-glow': '#f5b942',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
