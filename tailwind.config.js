/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px"
    },
    extend: {
      colors: {
        primary: "#14b8a6",
        secondary: "#64748b",
        dark: "#0f172a",
      },
      screens: {
        // "sm": "320px",
        // "md": "768px",
        // "lg": "1024px",
        // "xl": "1440px",
        // "2xl": "1320px",
      },
    },
  },
  plugins: [],
}
