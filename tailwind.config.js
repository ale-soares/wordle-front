/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-blue": "#619CFE",
        "theme-gray": "#292929",
        "theme-light-gray": "#363636",
        "theme-white": "#C2C2C2",
      },
      fontFamily: {
        sans: "Roboto, sans-serif",
        mono: "Cousine, monospace",
      },
      fontSize: {
        body: "20px",
        header: "64px",
        section: "32px",
        detail: "14px",
      },
    },
  },
  plugins: [],
};
