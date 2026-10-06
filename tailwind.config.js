/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: "var(--color-brand)",
          strong: "var(--color-brand-strong)",
          soft: "var(--color-brand-soft)",
          muted: "var(--color-brand-muted)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          soft: "var(--color-accent-soft)",
        },
        info: {
          DEFAULT: "var(--color-info)",
          soft: "var(--color-info-soft)",
        },
        surface: {
          DEFAULT: "var(--color-surface)",
          muted: "var(--color-surface-muted)",
          cream: "var(--color-surface-cream)",
        },
        text: {
          DEFAULT: "var(--color-text)",
          muted: "var(--color-text-muted)",
        },
        border: "var(--color-border)",
        warning: {
          bg: "var(--color-warning-bg)",
          text: "var(--color-warning-text)",
        },
      },
      borderRadius: {
        xs: "var(--radius-xs)",
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        full: "var(--radius-full)",
      },
      boxShadow: {
        card: "var(--shadow-card)",
        soft: "var(--shadow-soft)",
      },
      maxWidth: {
        container: "var(--container-xl)",
        "container-sm": "var(--container-sm)",
        "container-md": "var(--container-md)",
        "container-lg": "var(--container-lg)",
        "container-xl": "var(--container-xl)",
        "container-2xl": "var(--container-2xl)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
      },
      fontSize: {
        title: ["55px", { lineHeight: "1.1" }],
        secondary: ["45px", { lineHeight: "1.1" }],
        subtitle: ["20px", { lineHeight: "1.3" }],
        parragraph: ["18px", { lineHeight: "1.5" }],
        badge: ["20px", { lineHeight: "1.3" }],
        alert: ["24px", { lineHeight: "1.3" }],
        "card-title": ["18px", { lineHeight: "1.3" }],
        "card-text": ["15px", { lineHeight: "1.5" }],
        "card-interline": ["24px", { lineHeight: "24px" }],
        "card-time": ["13px", { lineHeight: "24px" }],
      },
    },
  },
  plugins: [],
};
