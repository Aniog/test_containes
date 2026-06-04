/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'burnt-orange': '#C2541A',
        'deep-ochre': '#B8860B',
        'acacia-green': '#4A5E3A',
        'savanna-sand': '#E8D5A3',
        'dusk-brown': '#3D2B1F',
        'ember': '#E07B39',
        'ash': '#F5EDD8',
        'charcoal-earth': '#1C1208',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Lato', 'system-ui', 'sans-serif'],
      },
      animation: {
        'heat-haze': 'heatHaze 8s ease-in-out infinite',
        'slow-float': 'slowFloat 20s ease-in-out infinite',
        'fade-dissolve': 'fadeDissolve 1.2s ease-in-out forwards',
        'parallax-drift': 'parallaxDrift 30s linear infinite',
      },
      keyframes: {
        heatHaze: {
          '0%, 100%': { filter: 'blur(0px) brightness(1)', transform: 'scale(1)' },
          '50%': { filter: 'blur(0.5px) brightness(1.05)', transform: 'scale(1.01)' },
        },
        slowFloat: {
          '0%': { transform: 'translateY(0px) scale(1.05)' },
          '50%': { transform: 'translateY(-12px) scale(1.08)' },
          '100%': { transform: 'translateY(0px) scale(1.05)' },
        },
        fadeDissolve: {
          '0%': { opacity: '0', filter: 'blur(8px)' },
          '100%': { opacity: '1', filter: 'blur(0px)' },
        },
        parallaxDrift: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'warm-gradient': 'linear-gradient(135deg, #1C1208 0%, #3D2B1F 50%, #C2541A 100%)',
        'ochre-gradient': 'linear-gradient(180deg, rgba(28,18,8,0.7) 0%, rgba(194,84,26,0.2) 100%)',
      },
    },
  },
  plugins: [],
}
