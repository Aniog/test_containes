/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cosmos: {
          bg:       'rgb(var(--cosmos-bg) / <alpha-value>)',
          surface:  'rgb(var(--cosmos-surface) / <alpha-value>)',
          elevated: 'rgb(var(--cosmos-elevated) / <alpha-value>)',
          teal:     'rgb(var(--cosmos-teal) / <alpha-value>)',
          violet:   'rgb(var(--cosmos-violet) / <alpha-value>)',
          green:    'rgb(var(--cosmos-green) / <alpha-value>)',
          text:     'rgb(var(--cosmos-text) / <alpha-value>)',
          muted:    'rgb(var(--cosmos-muted) / <alpha-value>)',
        },
      },
      boxShadow: {
        'glow-teal':    '0 0 30px rgba(0, 212, 200, 0.15)',
        'glow-teal-lg': '0 0 60px rgba(0, 212, 200, 0.25)',
        'glow-violet':  '0 0 30px rgba(124, 58, 237, 0.2)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
