/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0f2a4a',
          accent: '#1d5fa8',
        },
        action: {
          DEFAULT: '#e8833a',
          dark: '#cf6f25',
        },
        ink: '#0f1b2d',
        'slate-body': '#3b4a5c',
        surface: '#f5f7fa',
        'border-base': '#e2e8f0',
        muted: '#64748b',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1280px',
      },
    },
  },
  plugins: [],
}
