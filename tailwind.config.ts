import { theme } from './src/styles/theme'

module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/types/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: theme.colors,
      spacing: theme.spacing,
      borderRadius: theme.borderRadius,
    },
  },
  plugins: [],
}