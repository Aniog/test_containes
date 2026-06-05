/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'burnt-orange': '#C25A1E',
        'deep-ochre': '#B8860B',
        'acacia-green': '#5C7A2D',
        'parchment': '#F5F0E8',
        'warm-sand': '#EDE4D3',
        'dark-earth': '#3B2A1A',
        'clay': '#8B5E3C',
        'sunset-glow': '#D4783B',
        'dust': '#C4B5A5',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'dissolve': 'dissolve 8s ease-in-out infinite',
        'slow-drift': 'slowDrift 20s ease-in-out infinite',
        'heat-haze': 'heatHaze 6s ease-in-out infinite',
      },
      keyframes: {
        dissolve: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        slowDrift: {
          '0%, 100%': { transform: 'translateY(0) scale(1.05)' },
          '50%': { transform: 'translateY(-12px) scale(1.08)' },
        },
        heatHaze: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.02)' },
        },
      },
    },
  },
  plugins: [],
}
