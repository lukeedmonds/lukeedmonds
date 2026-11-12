import { type Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        wall: {
          DEFAULT: '#2F8F45',
          deep: '#24753A',
          light: '#3BA556'
        },
        floor: '#C62828',
        sky: {
          DEFAULT: '#15224B',
          deep: '#0E1735'
        },
        moon: '#F7F1C8',
        lemon: '#F4D35E',
        flame: '#F08A24',
        blush: '#E8B8C8',
        ink: '#1A1A1A',
        paper: '#FFF8E7'
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Nunito"', 'ui-rounded', 'sans-serif']
      },
      boxShadow: {
        outline: '0 0 0 3px #1A1A1A',
        glow: '0 0 24px rgba(240, 138, 36, 0.55)'
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.35', transform: 'scale(0.85)' },
          '50%': { opacity: '1', transform: 'scale(1)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.55', filter: 'brightness(1)' },
          '50%': { opacity: '1', filter: 'brightness(1.15)' }
        },
        curtainSway: {
          '0%, 100%': { transform: 'skewX(0deg)' },
          '50%': { transform: 'skewX(-1.5deg)' }
        }
      },
      animation: {
        twinkle: 'twinkle 2.8s ease-in-out infinite',
        float: 'float 5.5s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3.2s ease-in-out infinite',
        sway: 'curtainSway 6s ease-in-out infinite'
      }
    }
  },
  plugins: []
} satisfies Config;
