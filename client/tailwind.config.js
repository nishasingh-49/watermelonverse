/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'soft-bounce': 'softBounce 1.5s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'bounce': 'bounce 1s infinite',
      },
      keyframes: {
        softBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        glow: {
          '0%, 100%': { filter: 'brightness(1)' },
          '50%': { filter: 'brightness(1.2)' },
        },
      },
    },
  },
  plugins: [],
}
