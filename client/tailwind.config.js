/** @type {import('tailwindcss').Config} */
import {nextui} from "@nextui-org/react";
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      'green':'#6bad34',
      'green2':'#84C94B',
      'greenC': '#87d926',
      'greenC2': '#87d926'
      // Configure your color palette here
    },
    extend: {
      backgroundImage: {
       'schwank':"url('../components/banner/banner.jpg')"
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui(),
    require('tailwindcss-animated')]
}
