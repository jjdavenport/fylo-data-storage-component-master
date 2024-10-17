/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        paleBlue: "hsl(243, 100%, 93%)",
        grayishBlue: "hsl(229, 7%, 55%)",
        darkBlue: "hsl(228, 56%, 26%)",
        veryDarkBlue: "hsl(229, 57%, 11%)",
      },
      backgroundImage: {
        gradientCustom:
          "linear-gradient(90deg, hsl(6, 100%, 80%) 0%, hsl(335, 100%, 65%) 100%)",
        mobile: "url('../src/components/assets/bg-mobile.png')",
        desktop: "url('../src/components/assets/bg-desktop.png')",
      },
      fontFamily: {
        custom: ["raleway", "sans-serif"],
      },
      borderRadius: {
        custom: "6rem",
      },
      backgroundSize: {
        half: "100% 50%",
      },
    },
  },
  plugins: [],
};
