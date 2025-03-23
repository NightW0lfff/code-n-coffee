/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5", // Custom primary color
        background: "#fafaf9", // stone-50
        text: "#27272a", // zinc-800
        heading: "#18181b", // zinc-900
        accent: "#92400e", // amber-800
        accentLight: "#fef3c7", // amber-100
        softTeal: "#0d9488", // teal-600
        mutedBlue: "#0284c7", // sky-600
      },
    },
  },
  plugins: [],
};
