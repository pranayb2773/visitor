const colors = require("tailwindcss/colors");
const {
    toRGB,
    withOpacityValue,
} = require("./resources/js/tailwind-theme-helper");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/views/vendor/livewire-ui-modal/*",
        "./storage/framework/views/*.php",
        "./src/**/*.{php,html,js,jsx,ts,tsx,vue}",
        "./resources/**/*.{php,html,js,jsx,ts,tsx,vue}",
    ],
    safelist: [
        "sm:max-w-sm",
        "sm:max-w-md",
        "sm:max-w-lg",
        "sm:max-w-xl",
        "sm:max-w-2xl",
        "sm:max-w-3xl",
        "sm:max-w-4xl",
        "sm:max-w-5xl",
        "sm:max-w-6xl",
        "sm:max-w-7xl",
        "md:max-w-lg",
        "md:max-w-xl",
        "lg:max-w-2xl",
        "lg:max-w-3xl",
        "xl:max-w-4xl",
        "xl:max-w-5xl",
        "2xl:max-w-6xl",
        "2xl:max-w-7xl'",
        {
            pattern: /(bg|text)-(red|indigo)-(100|800)/,
        },
    ],
  theme: {
    extend: {
        colors: {
            rgb: toRGB(colors),
            primary: withOpacityValue("--color-primary"),
            tertiary: withOpacityValue("--color-tertiary"),
            secondary: withOpacityValue("--color-secondary"),
            success: withOpacityValue("--color-success"),
            info: withOpacityValue("--color-info"),
            warning: withOpacityValue("--color-warning"),
            pending: withOpacityValue("--color-pending"),
            danger: withOpacityValue("--color-danger"),
        },
    },
  },
  plugins: [require('@tailwindcss/forms'),],
}
