/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#1A1A1B',
        'charcoal-deep': '#111112',
        silver: '#C0C0C0',
        'blueprint-dark': '#1E3A5F',
        'blueprint-line': '#4A90D9',
        'molten': '#FF6B2B',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backdropBlur: {
        glass: '20px',
      },
      backgroundImage: {
        'metallic-silver': 'linear-gradient(135deg, #C0C0C0 0%, #888 50%, #C0C0C0 100%)',
        'dark-metallic': 'linear-gradient(180deg, #2a2a2b 0%, #1A1A1B 100%)',
        'blueprint-overlay': 'linear-gradient(135deg, rgba(30,58,95,0.8) 0%, rgba(10,22,40,0.9) 100%)',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'scan': 'scan 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
    },
  },
  plugins: [],
}
