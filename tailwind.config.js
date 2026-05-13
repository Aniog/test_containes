/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          950: '#0a0e1a',
          900: '#0d1224',
          800: '#111827',
          700: '#1a2235',
          600: '#1e2a45',
        },
        star: {
          gold: '#f59e0b',
          silver: '#f0f4ff',
        },
        nebula: {
          purple: '#818cf8',
          teal: '#2dd4bf',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'space-gradient': 'linear-gradient(135deg, #0a0e1a 0%, #0d1224 50%, #0a0e1a 100%)',
        'amber-glow': 'radial-gradient(ellipse at center, rgba(245,158,11,0.15) 0%, transparent 70%)',
        'nebula-glow': 'radial-gradient(ellipse at center, rgba(129,140,248,0.1) 0%, transparent 70%)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
      },
    },
  },
  plugins: [],
}
