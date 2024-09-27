/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        forum: ['Forum', 'sans-serif'], // Add the Forum font here
      },
    },
  },
  plugins: [],
}

