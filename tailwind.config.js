/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neon: {
          pink: '#FF00FF',
          blue: '#00FFFF',
          dark: '#050505',
        },
      },
      fontFamily: {
        display: ['Teko', 'sans-serif'], // Or Syne if imported
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, #2a2a2a 1px, transparent 1px), linear-gradient(to bottom, #2a2a2a 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
