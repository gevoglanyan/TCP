/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cabinet Grotesk"', 'sans-serif'],
        body: ['"Satoshi"', 'sans-serif'],
      },
      colors: {
        bg: '#0C0C0C',
        surface: '#141414',
        card: '#1A1A1A',
        border: '#2A2A2A',
        muted: '#3A3A3A',
        dim: '#C8C8C8',
        text: '#FFFFFF',
        sub: '#EFEFEF',
        accent: '#E8D5A3',
        'accent-dim': '#8B7D5A',
        green: '#4ADE80',
      },
    },
  },
  plugins: [],
}