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
          dark: '#0a0e1a',
          surface: '#131a2e',
          border: '#1e2a45',
          primary: '#00d4aa',
          secondary: '#7c3aed',
          accent: '#f472b6',
          text: '#e8edf5',
          muted: '#8b9dc3',
        },
      },
    },
  },
  plugins: [],
}
