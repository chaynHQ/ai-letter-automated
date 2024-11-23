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
          "100": "hsl(var(--secondary-foreground))",
          "200": "#F3AAB5",
          "300": "#F27D93",
          "400": "#F15170",
          "500": "hsl(var(--secondary))",
        },
        peach: {
          "100": "hsl(var(--primary-foreground))",
          "200": "#FFD5C3",
          "300": "#FFC1A5",
          "400": "#FFAC88",
          "500": "hsl(var(--primary))",
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
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
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
