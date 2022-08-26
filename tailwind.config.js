/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
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
        "sm": "320px",
        "md": "768px",
        "xl": "1024px",
        "2xl": "1440px"
      },
    },
  },
  plugins: [],
}
