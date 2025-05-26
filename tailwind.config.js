/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {      colors: {
        'ice-blue': '#4FC3F7',
        'deep-blue': '#1976D2',
        'light-blue': '#81D4FA',
        'frost': '#B3E5FC',
        'snow-white': '#FAFAFA',
        'charcoal': '#121212',
        'soft-gray': '#F5F5F5',
      },
      fontFamily: {
        'heading': ['Oswald', 'Impact', 'sans-serif'],
        'body': ['Inter', 'Montserrat', 'Arial', 'sans-serif'],
      },
      animation: {
        'snow-fall': 'snow-fall 10s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        'snow-fall': {
          '0%': { transform: 'translateY(-100vh)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(100vh)', opacity: '0' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow': {
          '0%': { boxShadow: '0 0 5px #4FC3F7, 0 0 10px #4FC3F7, 0 0 15px #4FC3F7' },
          '100%': { boxShadow: '0 0 10px #39FF14, 0 0 20px #39FF14, 0 0 30px #39FF14' },
        },
      },
    },
  },
  plugins: [],
}
