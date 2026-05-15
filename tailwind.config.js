/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#090D16',
        charcoal: '#121824',
        'charcoal-light': '#1A2333',
        'charcoal-mid': '#1E2A3A',
        'bio-green': '#10B981',
        'bio-green-dim': '#0D9268',
        'bio-cyan': '#06B6D4',
        'bio-cyan-dim': '#0891B2',
        'bio-orange': '#F97316',
        'bio-orange-dim': '#EA6C0A',
        'bio-purple': '#8B5CF6',
        'slate-dim': '#334155',
        'text-primary': '#F1F5F9',
        'text-secondary': '#94A3B8',
        'text-muted': '#475569',
        'border-dim': '#1E2D40',
        'border-glow': '#10B98133',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(rgba(16,185,129,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.04) 1px, transparent 1px)",
        'radial-glow': 'radial-gradient(ellipse at center, rgba(16,185,129,0.08) 0%, transparent 70%)',
        'hero-gradient': 'linear-gradient(to bottom, rgba(9,13,22,0) 0%, rgba(9,13,22,0.6) 50%, rgba(9,13,22,1) 100%)',
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'scan': 'scan 3s linear infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.7s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'glow-green': '0 0 20px rgba(16,185,129,0.3), 0 0 60px rgba(16,185,129,0.1)',
        'glow-cyan': '0 0 20px rgba(6,182,212,0.3), 0 0 60px rgba(6,182,212,0.1)',
        'glow-orange': '0 0 20px rgba(249,115,22,0.3), 0 0 60px rgba(249,115,22,0.1)',
        'card': '0 4px 24px rgba(0,0,0,0.4), 0 1px 4px rgba(0,0,0,0.3)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
}
