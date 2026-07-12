import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B0B0B',
        gold: {
          DEFAULT: '#C9A227',
          light: '#E3C567',
          dark: '#8F711A',
        },
        paper: '#F9F8F4',
        white: '#FFFFFF',
        stone: {
          400: '#A7A296',
          500: '#7C7768',
          600: '#5C5952',
        },
      },
      fontFamily: {
        heading: ['"Cinzel"', 'serif'],
        sub: ['"Cormorant Garamond"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.28em',
      },
      backgroundImage: {
        'gold-line': 'linear-gradient(90deg, transparent, #C9A227, transparent)',
      },
      boxShadow: {
        chamber: '0 20px 60px -20px rgba(11,11,11,0.35)',
      },
      transitionTimingFunction: {
        luxury: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
} satisfies Config;
