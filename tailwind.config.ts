import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    fontFamily: {
      inter: ['var(--font-inter)'],
      khula: ['var(--font-khula)'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'custom-gray': '#e4e4e4',
        'custom-dark-gray': '#1f1f1f',
      },
    },
  },
  plugins: [],
}
export default config
