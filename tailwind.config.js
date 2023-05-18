/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'light':'#FFFFFF',
        'main':'#EF8094',
        'sec': '#F5F8FF'
      },
      spacing: {
        'landing': 'calc(100vh - (72.54px + 6px))',
      }
    },
    fontFamily: {
      'Dm-serif-big': 'DM Serif Display, serif;',
      'Dm-sans-small': 'DM Sans, sans-serif'
    },
    container: {
      center: 'true',
    }
  },
  plugins: [],
}

