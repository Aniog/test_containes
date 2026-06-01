/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cosmic-blue': '#4a9eff',
        'cosmic-violet': '#9b6dff',
        'cosmic-amber': '#ffb347',
        'cosmic-teal': '#2dd4bf',
        'cosmic-rose': '#ff6b9d',
        'star-white': '#e8f0ff',
        'star-dim': '#8899bb',
        'nebula-glow': '#1a2a5e',
        'space-black': '#050810',
        'space-navy': '#080d1a',
        'space-midnight': '#0d1530',
      },
      fontFamily: {
        'space': ['"Space Grotesk"', 'sans-serif'],
        'mono': ['"Space Mono"', 'monospace'],
        'body': ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out both',
        'fade-in-up': 'fadeInUp 0.6s ease-out both',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'twinkle': 'twinkle 4s ease-in-out infinite',
        'slide-in': 'slideIn 0.4s ease-out both',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', boxShadow: '0 0 10px rgba(74,158,255,0.3)' },
          '50%': { opacity: '1', boxShadow: '0 0 30px rgba(74,158,255,0.7)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      backgroundImage: {
        'space-gradient': 'radial-gradient(ellipse at center, #0d1530 0%, #080d1a 50%, #050810 100%)',
        'card-gradient': 'linear-gradient(135deg, #0d1530 0%, #080d1a 100%)',
        'hero-radial': 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(74,158,255,0.15) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
}
