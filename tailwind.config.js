/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      spartan: ['sans-serif', 'League Spartan '],
    },
    colors: {
      main: '#7c5dfa',
      'main-alt': '#9277ff',
      navy: '#1e2139',
      'white-bg': '#f8f8f8',
      'text-main': '#0c0e16',
      'text-2': '#888eb0',
      'text-alt': '#7e88c3',
      green: '#33d69f',
      yellow: '#ff8f00',
      red: '#ec5757',
    },
  },
  plugins: [],
};
