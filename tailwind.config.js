/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#0A1122",
        darkBgColor: "#070D19",
        lightBgColor: "#011E41",
        pryLight: "#D9D9D9",
        strokeLight: "#0F4E98",
        gradientColor: "#567BA7",
        iconColor: "#4285F4",
      },
      fontFamily: {
        primaryRegular: ["Regular"],
        primaryMedium: ["Medium"],
        secBold: ["MontserratBold"],
        secMedium: ["MontserratMedium"],
      },
      gridTemplateColumns: {
        "70/30": "70% 28%",
      },
      fontSize: {
        "extra-small": "10px", // Or any desired pixel value
      },
    },
  },
  plugins: [],
};
