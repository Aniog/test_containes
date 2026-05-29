/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dream-void': '#050510',
        'dream-deep': '#0a0820',
        'dream-purple': '#1a0a3e',
        'dream-violet': '#2d1b69',
        'dream-indigo': '#4a2c8a',
        'dream-lavender': '#7c5cbf',
        'dream-lilac': '#b89ee8',
        'dream-mist': '#e8d5ff',
        'dream-glow': '#c084fc',
        'dream-aurora': '#818cf8',
        'dream-rose': '#f472b6',
        'dream-gold': '#fbbf24',
        'dream-teal': '#2dd4bf',
        'dream-cyan': '#67e8f9',
        'dream-ember': '#fb923c',
      },
      fontFamily: {
        dream: ['Cinzel', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'floatSlow 10s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'drift': 'drift 20s linear infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'gradient': 'gradientShift 8s ease infinite',
        'fade-in-up': 'fadeInUp 0.8s ease forwards',
        'fade-in-scale': 'fadeInScale 0.6s ease forwards',
        'morph': 'morphBlob 8s ease-in-out infinite',
        'shimmer': 'shimmer 4s linear infinite',
      },
    },
  },
  plugins: [],
}

