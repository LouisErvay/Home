/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        keyframes: {
          fadeInUp: {
            '0%': { opacity: '0', transform: 'translateY(10px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' }
          },
          fadeOutDown: {
            '0%': { opacity: '1', transform: 'translateY(0)' },
            '100%': { opacity: '0', transform: 'translateY(10px)' }
          }
        },
        animation: {
          fadeInUp: 'fadeInUp 0.3s ease-out forwards',
          fadeOutDown: 'fadeOutDown 0.3s ease-out forwards'
        },
        boxShadow: {
          'cyan': '0 0 15px rgba(34, 211, 238, 0.4)'
        }
      },
    },
    plugins: [],
  }