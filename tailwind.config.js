/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'baseColorHeader': '#555555',
        'secondaryColorHeader': '#cdc9c3',
        'mainColor': '#D9E4DD',
        'secondaryColor': '#FBF7F0',
      }
    },
  },
  plugins: [],
}