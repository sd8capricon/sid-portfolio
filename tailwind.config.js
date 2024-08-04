/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'background': "#1B262C",
        'primary': '#0F4C75',
        'primary-light': "#3282B8",
        'primary-lighter': "#BBE1FA"
      },
    },
  },
  plugins: [],
}
