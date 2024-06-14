/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle, rgba(252, 119, 83, 0.6) 0%, rgba(0, 0, 0, 0.4) 70%)',
      },
    },
  },
  plugins: [],
}

