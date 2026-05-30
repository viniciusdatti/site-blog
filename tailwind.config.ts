import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "PT Sans Caption", "sans-serif"],
        inter: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      fontSize: {
        "heading-hg": ["40px", { lineHeight: "120%", fontWeight: "700" }],
        "heading-xl": ["32px", { lineHeight: "120%", fontWeight: "700" }],
        "heading-lg": ["28px", { lineHeight: "120%", fontWeight: "700" }],
        "heading-md": ["24px", { lineHeight: "120%", fontWeight: "700" }],
        "heading-sm": ["20px", { lineHeight: "120%", fontWeight: "700" }],
        "heading-xs": ["16px", { lineHeight: "120%", fontWeight: "700" }],
        "body-md": ["16px", { lineHeight: "150%", fontWeight: "400" }],
        "body-sm": ["14px", { lineHeight: "150%", fontWeight: "400" }],
        "body-xs": ["12px", { lineHeight: "150%", fontWeight: "400" }],
        "action-md": ["16px", { lineHeight: "normal", fontWeight: "500" }],
        "action-sm": ["14px", { lineHeight: "normal", fontWeight: "500" }],
      },
      colors: {
        blue: {
          100: "#7EA4D7",
          200: "#2C85FC",
          300: "#2266C1",
          400: "#0D284C",
        },
        cyan: {
          100: "#2DEBFC",
          200: "#187D86",
          300: "#0E474C",
        },
        gray: {
          100: "#E9EAEC",
          200: "#D3D5D9",
          300: "#93979E",
          400: "#20242C",
          500: "#16181D",
          600: "#14161A",
          700: "#101216",
          800: "#0B0C0F",
        },
        white: "#FFFFFF",
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        navbar: "rgb(var(--navbar) / <alpha-value>)",
        card: {
          DEFAULT: "rgb(var(--card) / <alpha-value>)",
          foreground: "rgb(var(--card-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "rgb(var(--popover) / <alpha-value>)",
          foreground: "rgb(var(--popover-foreground) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "rgb(var(--primary) / <alpha-value>)",
          foreground: "rgb(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "rgb(var(--secondary) / <alpha-value>)",
          foreground: "rgb(var(--secondary-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "rgb(var(--muted) / <alpha-value>)",
          foreground: "rgb(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          foreground: "rgb(var(--accent-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "rgb(var(--destructive) / <alpha-value>)",
          foreground: "rgb(var(--destructive-foreground) / <alpha-value>)",
        },
        border: "rgb(var(--border) / <alpha-value>)",
        input: "rgb(var(--input) / <alpha-value>)",
        ring: "rgb(var(--ring) / <alpha-value>)",
        chart: {
          "1": "var(--chart-1)",
          "2": "var(--chart-2)",
          "3": "var(--chart-3)",
          "4": "var(--chart-4)",
          "5": "var(--chart-5)",
        },
        sidebar: {
          DEFAULT: "rgb(var(--sidebar) / <alpha-value>)",
          foreground: "rgb(var(--sidebar-foreground) / <alpha-value>)",
          primary: "rgb(var(--sidebar-primary) / <alpha-value>)",
          "primary-foreground": "rgb(var(--sidebar-primary-foreground) / <alpha-value>)",
          accent: "rgb(var(--sidebar-accent) / <alpha-value>)",
          "accent-foreground": "rgb(var(--sidebar-accent-foreground) / <alpha-value>)",
          border: "rgb(var(--sidebar-border) / <alpha-value>)",
          ring: "rgb(var(--sidebar-ring) / <alpha-value>)",
        },
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
