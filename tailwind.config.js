/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'dark-cyan': '#3c8067',
        'cream' :'#f2ebe3',
        'very-dark-blue': '#1c232b',
        'dark-grafish-blue': '#6c7289',
      }
    },
  },
  plugins: [],
}
