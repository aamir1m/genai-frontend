/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Ensure this path covers all your React component files
    './src/*.{tsx, ts, jsx, js}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

