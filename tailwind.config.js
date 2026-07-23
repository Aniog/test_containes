/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: '#0A0A0A',
        surface: '#FAF9F7',
        'surface-alt': '#F3F0EB',
        'text-primary': '#1A1A1A',
        'text-secondary': '#6B6560',
        accent: '#B28A5B',
        'accent-dark': '#8C6B42',
        hairline: '#E5E2DD',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest': '0.12em',
        'label': '0.1em',
      },
      maxWidth: {
        'container': '1280px',
      },
    },
  },
  plugins: [],
}
