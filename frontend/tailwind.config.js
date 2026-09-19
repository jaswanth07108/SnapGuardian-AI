/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        snapdragon: {
          dark: '#0B0F19',
          card: '#131B2E',
          accent: '#FF0033',
          red: '#ED1C24',
          cyan: '#00F0FF',
          blue: '#3B82F6',
          green: '#10B981'
        }
      }
    },
  },
  plugins: [],
}
