/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        whatsapp: {
          dark: '#111b21',
          darker: '#0a0e11',
          light: '#e0e0e0',
          green: '#00a884',
          'green-light': '#31a24c',
        },
      },
    },
  },
  plugins: [],
};
