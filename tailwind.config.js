/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // CUSTOMISE: Adjust brand colours here
        forest: {
          DEFAULT: '#1c4532',
          dark:    '#0f2418',
          light:   '#2d6a4f',
          lighter: '#3a8a65',
          50:      '#edfaf2',
        },
        cream: {
          DEFAULT: '#f9f6ee',
          dark:    '#f0ead8',
          darker:  '#e5d9b8',
        },
        gold: {
          DEFAULT: '#c9a550',
          light:   '#e8c97a',
          dark:    '#a07c30',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        premium:    '0 10px 40px rgba(0,0,0,0.10)',
        'premium-lg': '0 20px 60px rgba(0,0,0,0.14)',
        green:      '0 4px 20px rgba(28,69,50,0.30)',
      },
    },
  },
  plugins: [],
}
