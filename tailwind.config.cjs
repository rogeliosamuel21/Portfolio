/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      display: ['"Work Sans"'],
    },
    extend: {
      colors: {
        primary: '#146EF5',
        bg: '#000',
        'neutral-1': '#E3E4E6',
        'neutral-2': '#818181',
      },
      fontSize: {
        h1: 56,
        h2: 40,
        h3: 32,
        h4: 24,
        h5: 16,
        'body-1': 18,
        button: 16,
        label: 14,
      },
      letterSpacing: {
        h1: '-0.02rem',
        h4: '0.06rem',
        h5: '0.04rem',
        button: '0.04rem',
      },
    },
  },
  plugins: [],
}