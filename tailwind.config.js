/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#0f0d0b',
          soft: '#161310',
          muted: '#1f1c18',
          line: 'rgba(255,255,255,0.08)',
        },
        surface: {
          DEFAULT: '#f7f5f2',
          alt: '#edeae4',
          warm: '#f2efe8',
        },
        ink: {
          DEFAULT: '#1b1816',
          muted: '#6b645c',
          soft: '#9a9288',
        },
        gold: {
          DEFAULT: '#c9a96e',
          light: '#e3cfa3',
          dark: '#a6844b',
          glow: 'rgba(201,169,110,0.18)',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grain': 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'200\' height=\'200\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.04\'/%3E%3C/svg%3E")',
      },
      boxShadow: {
        'soft': '0 10px 30px rgba(0,0,0,0.08)',
        'soft-lg': '0 20px 60px rgba(0,0,0,0.12)',
        'gold': '0 10px 30px rgba(201,169,110,0.18)',
      },
      letterSpacing: {
        'widest-xl': '0.28em',
      },
      transitionTimingFunction: {
        'velmora': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
    },
  },
  plugins: [],
}
