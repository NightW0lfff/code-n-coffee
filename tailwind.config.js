export const darkMode = "class";
export const content = [
  "./src/app/**/*.{js,ts,jsx,tsx}",
  "./src/components/**/*.{js,ts,jsx,tsx}",
];

export const theme = {
  extend: {
    colors: {
      background: "var(--background)",
      text: "var(--text)",
      heading: "var(--heading)",
      accent: "var(--accent)",
      accentLight: "var(--accent-light)",
      softTeal: "var(--soft-teal)",
      mutedBlue: "var(--muted-blue)",
    },
  },
};

export const plugins = [];
