/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a1f2e',
        'primary-foreground': '#faf8f5',
        accent: '#c9a96e',
        'accent-foreground': '#1a1f2e',
        muted: '#f5f3ef',
        'muted-foreground': '#6b7280',
        card: '#ffffff',
        'card-foreground': '#1a1f2e',
        border: '#e5e0d8',
      },
    },
  },
  plugins: [],
}
