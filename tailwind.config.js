/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color: "#2D303B",
        gray: "#e4ded5",
        chocolate: "#d4ac8e",
        hashtag: "#b55730",
        black: "#223240",
        primary: "#c47d57",
        green: "#2D4850",
        stone: "rgba(213,173,143,.3)",
        darkgreen: "#223240",
      },
      fontSize: {
        large: "5.625rem",
        medium: "2.5rem",
        small: "80px",
      },
      padding: {
        left: "10vw",
      },
      lineHeight: {
        xsmall: "1em",
        md: "1.1em",
        small: "1.3em",
        large: "1.6em",
        "4rem": "4.063rem",
      },
      maxWidth: {
        length: "42.1875rem",
      },
      fontFamily: {
        hero: ["Fraunces144ptsupersoft", "sans-serif"],
        Fraunces: ["Fraunces72ptsupersoft", "sans-serif"],
        Geomonist: ["Geomanist", "sans-serif"],
      },
      backgroundImage: {
        noise: 'url("/assets/noise10.webp")',
        land: 'url("/assets/background.webp")',
        blacknoise: 'url("/assets/noise 1.jpg")',
      },
    },
  },
  plugins: [],
};
