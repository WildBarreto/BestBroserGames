/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extends: {
      colors: {
        back: '0F1216'
      },
    }

  },
  plugins: [],
}

