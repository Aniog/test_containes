/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cosmos: '#0a0e1a',
        void: '#0d1224',
        nebula: '#111827',
        surface: '#1a2035',
        'surface-hover': '#1e2640',
        star: '#f0f4ff',
        muted: '#8892a4',
        dim: '#4a5568',
        amber: '#f5c842',
        aurora: '#7dd3fc',
        'nebula-pink': '#e879f9',
        subtle: '#1e2a3a',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'twinkle-slow': 'twinkle 5s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(245, 200, 66, 0.1)' },
          '50%': { boxShadow: '0 0 40px rgba(245, 200, 66, 0.3)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'star-gradient': 'radial-gradient(ellipse at top, #1a2035 0%, #0a0e1a 70%)',
        'hero-gradient': 'radial-gradient(ellipse at 50% 40%, rgba(245,200,66,0.06) 0%, rgba(125,211,252,0.04) 40%, transparent 70%)',
        'card-gradient': 'linear-gradient(135deg, rgba(26,32,53,0.8) 0%, rgba(17,24,39,0.9) 100%)',
      },
    },
  },
  plugins: [],
}
