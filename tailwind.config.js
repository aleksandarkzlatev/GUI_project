/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./Hero/*.html",
    "./Lising/*.html",
    "./SomeText/*.html",
    "./Contact/*.html",
    "./src/*.css"
  ],
  theme: {
    extend: {
      animation: {
        'scroll-left': 'scroll-left 6s linear infinite',
      },
      keyframes: {
        'scroll-left': {
          '0%': { transform: 'translateX(100vw)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}

