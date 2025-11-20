import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'tomato-red': '#D6422B',
        'warm-cream': '#FFF6EB',
        'charcoal': '#1F1F1F',
        'diner-white': '#FEFEFE',
        'accent-mustard': '#F4A259',
      },
      fontFamily: {
        'heading': ['var(--font-truculenta)', 'system-ui', 'sans-serif'],
        'body': ['var(--font-truculenta)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
