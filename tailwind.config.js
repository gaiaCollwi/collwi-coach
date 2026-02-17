/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        collwi: {
          purple: '#7B68BE',
          teal: '#4ECDC4',
          coral: '#FF6B6B',
          cream: '#FFF8E7',
        }
      }
    },
  },
  plugins: [],
}
