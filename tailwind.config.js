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
          950: '#020817',
          900: '#050a14',
          800: '#0a1628',
          700: '#0f1f3d',
          600: '#162a52',
        },
        nebula: {
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
        },
        star: {
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
        },
        gold: {
          200: '#fef08a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
        },
        emotion: {
          joy: '#fbbf24',
          grief: '#6366f1',
          love: '#f43f5e',
          wonder: '#06b6d4',
          nostalgia: '#a78bfa',
          fear: '#64748b',
          hope: '#34d399',
          pride: '#fb923c',
        },
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      animation: {
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'drift': 'drift 20s linear infinite',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        drift: {
          '0%': { transform: 'translateX(-100px) translateY(0)' },
          '100%': { transform: 'translateX(calc(100vw + 100px)) translateY(-50px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(139,92,246,0.2)' },
          '50%': { boxShadow: '0 0 60px rgba(139,92,246,0.5)' },
        },
      },
      backgroundImage: {
        'nebula-radial': 'radial-gradient(ellipse at center, rgba(124,58,237,0.15) 0%, transparent 70%)',
        'star-radial': 'radial-gradient(ellipse at center, rgba(14,165,233,0.1) 0%, transparent 70%)',
        'gold-radial': 'radial-gradient(ellipse at center, rgba(251,191,36,0.1) 0%, transparent 70%)',
        'space-gradient': 'linear-gradient(to bottom, #020817, #050a14)',
      },
    },
  },
  plugins: [],
}
