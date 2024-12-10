import typography from '@tailwindcss/typography'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        customGray: {
          950: "#0E0E0E",
          900: "#161617",
          800: "#1E1E1F",
          700: "#2A2A2C",
          600: "#363638",
          500: "#444446",
          400: "#565659",
          300: "#6A6A6E",
          200: "#86868B",
          100: "#A3A3A9",
          50: "#E4E4E7",
        },
      },
    },
    fontFamily: {
      'body': ['Inter', 'sans-serif'],
      'display': ['Fraunces', 'serif'],
    },
  },
  plugins: [typography],
}

