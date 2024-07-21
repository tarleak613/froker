/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '25%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(0)', opacity: '1' },
          '75%': { transform: 'translateY(0)', opacity: '0' },
          '100%': { transform: 'translateY(-100%)', opacity: '0' },
        },
      },
      animation: {
        'slide-up': 'slideUp 6s ease-in-out infinite',
      },
      fontFamily: {
        'gilroy': ['Gilroy', 'sans-serif'],
      },
    },
  },
  plugins: [],
}