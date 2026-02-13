import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: '#4ECDC4',
          'teal-dark': '#3BAFA8',
          'teal-light': '#E0F7F5',
          purple: '#7C5CBF',
          'purple-dark': '#6347A0',
          'purple-light': '#F0EAFF',
          gold: '#F7C948',
          'gold-light': '#FFF8E1',
          coral: '#F4845F',
          'coral-light': '#FFF0EB',
          navy: '#1A1F36',
          'navy-light': '#2D3250',
        },
        surface: {
          warm: '#FAF8F5',
          cool: '#F0F9F8',
          muted: '#F8F9FC',
        },
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 10px 40px -10px rgba(0, 0, 0, 0.1)',
        'soft-xl': '0 20px 60px -15px rgba(0, 0, 0, 0.12)',
        'teal': '0 8px 30px -4px rgba(78, 205, 196, 0.35)',
        'purple': '0 8px 30px -4px rgba(124, 92, 191, 0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
