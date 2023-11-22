module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
    colors: {
      'smoky-black': '#090C02',
      'lapis-lazuli': '#255f85',
      'cardinal': '#c5283d',
      'brunt-sienna': '#e9724c'

    }
  },
  plugins: [require('flowbite/plugin')],
}