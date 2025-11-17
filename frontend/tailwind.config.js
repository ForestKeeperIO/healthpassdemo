/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"SF Pro Display"', 'Roboto', 'system-ui', 'sans-serif'],
      },
      colors: {
        midnight: {
          50: '#f2f7ff',
          100: '#dfe8ff',
          200: '#b9cbff',
          300: '#8aa6ff',
          400: '#5a7dff',
          500: '#2a52ff',
          600: '#1f40db',
          700: '#1630b7',
          800: '#0f218f',
          900: '#091560',
        },
        emerald: '#2ecc71',
        coral: '#ff6f61',
        charcoal: '#1b1f3a',
        lilac: '#b388eb',
      },
    },
  },
  plugins: [],
};
