import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          "100": "var(--secondary-foreground)",
          "200": "#F3D6D8",
          "300": "#F27D93",
          "400": "#F15170",
          "500": "var(--secondary)",
        },
        peach: {
          "100": "var(--primary-foreground)",
          "200": "#FFEAE1",
          "300": "#FFC1A5",
          "400": "#FFAC88",
          "500": "var(--primary)",
        },
        blue: {
          "100": "#E1E6FC",
          "200": "#CDD5F6",
          "300": "#B5BFE8",
          "400": "#91A1E7",
          "500": "#798CE2",
        },
        green: {
          "100": "#DCE6DB",
          "200": "#D5E4D2",
          "300": "#C1D4BD",
          "400": "#ABC2A7",
          "500": "#97B493",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
		primaryDark: "var(--primary-dark)",
		secondaryDark: "var(--secondary-dark)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
