import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          100: '#FFF1F1',
          200: '#FFD9D9',
          300: '#FFC2C2',
          400: '#FF9B9B',
          500: '#FF7474',
        },
      },
    },
  },
  plugins: [],
};

export default config;