/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cosmos:      '#0a0c14',
        'deep-space':'#0f1221',
        nebula:      '#161b33',
        stardust:    '#1e2540',
        aurora:      '#4f6ef7',
        'amber-star':'#f5c842',
        moonlight:   '#e8eaf6',
        comet:       '#9ba3c4',
        horizon:     '#5c6490',
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        inter:     ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        aurora: '0 0 24px rgba(79,110,247,0.18)',
        amber:  '0 0 24px rgba(245,200,66,0.14)',
        glow:   '0 0 40px rgba(79,110,247,0.12)',
      },
      backgroundImage: {
        'star-gradient': 'radial-gradient(ellipse at top, #161b33 0%, #0a0c14 70%)',
        'hero-gradient': 'radial-gradient(ellipse at 50% 0%, #1e2540 0%, #0a0c14 60%)',
      },
    },
  },
  plugins: [],
}
