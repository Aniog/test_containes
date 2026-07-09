/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        micro: {
          bg: '#020617',
          surface: '#0f172a',
          border: '#1e293b',
          accent: '#22d3ee',
          accent2: '#34d399',
          muted: '#94a3b8',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(34, 211, 238, 0.1)' },
          '50%': { boxShadow: '0 0 40px rgba(34, 211, 238, 0.3)' },
        },
      },
    },
  },
  plugins: [],
}
