/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,css,scss}"
  ],
  theme: {
    extend: {
      keyframes: {
       fadeIn: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
       },
       animation: {
        'fade-in': 'fadeIn .2s ease-in-out',

      }
    },
  },
  plugins: [],
}

}
