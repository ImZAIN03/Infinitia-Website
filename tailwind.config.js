/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        aquamarine: "#00ffc6",
        white: "#fff",
        black: "#000",
        darkgray: "#aaa",
        gray: {
          "100": "#161616",
          "200": "#0f0f0f",
          "300": "rgba(255, 255, 255, 0.2)",
          "400": "rgba(0, 0, 0, 0.4)",
        },
      },
      fontFamily: {
        "bebas-neue": "'Bebas Neue'",
        "open-sans": "'Open Sans'",
        oxanium: "Oxanium",
      },
    },
    fontSize: {
      "31xl": "50px",
      lg: "18px",
      "81xl": "100px",
      "11xl": "30px",
      "5xl": "24px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
