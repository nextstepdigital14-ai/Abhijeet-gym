/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gym: {
          black: '#080809',
          surface: '#111216',
          card: '#181920',
          cardHover: '#1f212a',
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(239, 68, 68, 0.4)',
          red: {
            DEFAULT: '#ef4444',
            50: '#fef2f2',
            100: '#fee2e2',
            500: '#ef4444',
            600: '#dc2626',
            700: '#b91c1c',
            glow: 'rgba(239, 68, 68, 0.25)',
          },
          lime: {
            DEFAULT: '#84cc16',
            glow: 'rgba(132, 204, 22, 0.25)',
          },
          text: {
            primary: '#f8fafc',
            secondary: '#94a3b8',
            muted: '#64748b'
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gym-red': '0 0 25px -5px rgba(239, 68, 68, 0.4)',
        'gym-red-lg': '0 0 40px -8px rgba(239, 68, 68, 0.55)',
        'gym-card': '0 10px 30px -10px rgba(0, 0, 0, 0.7)',
        'gym-card-hover': '0 15px 35px -5px rgba(239, 68, 68, 0.15)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
