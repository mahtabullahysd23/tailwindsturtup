/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'black': '#000000',
      'gray':'#f7f5fa',
      'purple': {
        'light':'#bba8f2',
        'dark':'#a055f4',
      },
      'blue':'#3b82f6',
      'green':'#10b981',
      'red':'#ef4444',
      'yellow':'#f59e0b', 
    },
    extend: {},
  },
  plugins: [],
}

