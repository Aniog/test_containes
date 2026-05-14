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
        surface: '#1A2235',
        subtle: '#1E2D42',
        'bio-green': '#10B981',
        phosphor: '#F97316',
      },
      fontFamily: {
        grotesk: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'dot-pattern': 'radial-gradient(circle, #1E2D42 1px, transparent 1px)',
        'grid-pattern': 'linear-gradient(#1E2D42 1px, transparent 1px), linear-gradient(90deg, #1E2D42 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot-sm': '24px 24px',
        'grid-sm': '40px 40px',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'scan': 'scan 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
    },
  },
  plugins: [],
}
