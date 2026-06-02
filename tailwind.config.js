/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'forest-deep': '#1A2421',
        'canopy-shadow': '#0F1A17',
        'moss-dark': '#2C3D35',
        'moss-mid': '#3D5247',
        'mist-grey': '#8FA89E',
        'fog-white': '#D6E0DC',
        'bark-accent': '#6B8C7A',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fog-drift': {
          '0%, 100%': { opacity: '0.85', transform: 'translateX(0)' },
          '50%': { opacity: '0.7', transform: 'translateX(4px)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fog-drift': 'fog-drift 8s ease-in-out infinite',
        'fade-up': 'fade-up 0.9s ease-out forwards',
      },
    },
  },
  plugins: [],
}
