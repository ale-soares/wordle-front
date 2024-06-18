/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-blue": "#222325",
        "theme-gray": "#1E1E1E",
        "theme-light-gray": "#8A8A97",
        "theme-black": "#1E1E1E",
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
      lineHeight: {
        "extra-snug": "1.3",
      },
    },
  },
  plugins: [],
};
