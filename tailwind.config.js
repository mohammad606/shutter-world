/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    colors: {
      darkBlue: "#0e7bc0",
      whiteBlue: "#5892B7",
      whiteGray: "#F2F2F2",
      white: "#ffffffff"
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1660px'
    }
  },
  plugins: [],
}