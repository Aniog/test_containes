/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    { pattern: /bg-vel-/, variants: ['hover', 'focus'] },
    { pattern: /text-vel-/, variants: ['hover'] },
    { pattern: /border-vel-/, variants: ['hover', 'focus'] },
    { pattern: /ring-vel-/, variants: ['focus'] },
    'text-white',
    'hover:text-white',
    'bg-white',
    'hover:bg-white',
  ],
  theme: {
    extend: {
      colors: {
        vel: {
          base: '#1a1816',
          'base-light': '#2a2623',
          bg: '#f7f5f2',
          card: '#ffffff',
          accent: '#c8a46e',
          'accent-hover': '#b08d57',
          muted: '#9a9590',
          border: '#e3dfd8',
          cream: '#efeae3',
          'cream-dark': '#e6dfd6',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.18em',
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(26, 24, 22, 0.08)',
        'soft-lg': '0 20px 60px -15px rgba(26, 24, 22, 0.12)',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
