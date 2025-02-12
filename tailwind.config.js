/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "yellow-350": "#fee958",
        "slate-350": "#45E6D6",
        "gray-50": "#B9B9B9",
        "gray-350": "#C6D2DF",
        "#45E6D6": "#45E6D6",
        "#FDB43E": "#FDB43E",
        "#127BE9": "#127BE9",
        "#127BE94D": "#127BE94D",
        "#B3C0C7": "#B3C0C7",
        "#FFE958": "#FFE958",
      },
      colors: {
        "gray-25": "#999999",
        "gray-350": "#999",
        "gray-150": "#D9D9D9",
        "#526B78": "#526B78",
        maincolor: "#FFE958",
      },
      fontWeight: {
        500: "500",
      },
      borderWidth: {
        1: "1px",
      },
      width: {
        4.5: "18px",
        4.75: "19px",
        7.5: "30px",
        8.5: "33px",
        18: "70px",
        21: "82px",
        22: "88px",
        25: "102px",
        33: "141px",
        53: "218.7px",
        56.3: "225px",
        56.5: "227px",
        498: "498px",
        505: "505px",
        117: "155px",
        302: "302px",
        5.5: "22px",
        1.25: "6px",
        110: "110px",
      },
      maxWidth: {
        "88%": "88%",
        648: "648px",
        314: "314px",
      },

      height: {
        3.5: "13px",
        4.5: "18px",
        4.75: "19px",
        7.5: "30px",
        9.5: "36px",
        10.5: "42px",
        11.5: "45px",
        18: "70px",
        19: "77px",
        22: "88px",
        26.5: "107px",
        45: "179px",
        77: "305px",
        49: "49px",
        2.5: "10px",
        1.25: "6px",
        266: "266px",
      },
      minHeight: {
        266: "266px",
      },
      borderRadius: {
        4: "4px",
        5: "5px",
        10: "10px",
        10: "10px",
        3: "3px",
        homeframbtmround: "24.5px",
        2: "2px",
      },
      margin: {
        0.1: "1px",
        "50%": "50%",
        275: "275px",
        30: "30px",
        0.25: "2px",
        0.5: "3px",
        1.5: "6px",
        2.25: "9px",
        2.5: "10px",
        3.25: "14px",
        3.5: "15px",
        5.5: "22px",
        12.5: "50px",
        38: "157px",
        46: "187px",
      },
      padding: {
        2.25: "9px",
        2.5: "8.6px",
        3.5: "15px",
        34: "119px",
        34: "119px",
        29: "29px",
        7.5: "7.5px",
        6: "6px",
        0.5: "0.5px",
      },
      fontFamily: {
        grotesk: "Space Grotesk",
        roboto: "Roboto",
      },
      boxShadow: {
        "yellow-sm":
          " 0px -4px 0px 0px #FFE958 inset, 0px -5px 0px 0px #000 inset;",
      },
      fontSize: {
        xxs: "8px",
        xss: "10px",
        xsm: "13px",
        16: "16px",
        12: "12px",
        14: "14px",
        18: "18px",
      },
      lineHeight: {
        sm: "11.5px",
        22.97: "22.92px",
      },
      boxShadow: {
        "#127be9":
          "0px -4px 0px 0px #127be9 inset, 0px -5px 0px 0px #000 inset;",
      },
      screens: {
        mac: "1385px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
