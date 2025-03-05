/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'pixel': ['"Press Start 2P"', 'cursive'],
      },
      colors: {
        retro: {
          primary: '#4a4a4a',
          secondary: '#8b8b8b',
          accent: '#ff6b6b',
          dark: '#2d2d2d',
          light: '#d4d4d4',
        },
      },
      boxShadow: {
        'pixel': '4px 4px 0 0 rgba(0, 0, 0, 0.2)',
        'pixel-lg': '8px 8px 0 0 rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
};