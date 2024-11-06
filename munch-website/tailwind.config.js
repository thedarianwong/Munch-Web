/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-pink': '#f7b8d2',
        'brand-purple': '#6b64b8',
      }
    },
  },
  plugins: [],
}

