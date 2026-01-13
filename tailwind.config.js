export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        lavender: {
          50: "#f7f5fb",
          300: "#c4b5fd",
          500: "#8b5cf6",
        },
        blacksoft: "#0f0f0f",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
