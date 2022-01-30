const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
        fontFamily: {
            'hero': ['Rakkas'],
            'amh': ['Fantuwua'],
            'sans': ['Roboto']
        },
        screens: {
            'xs': '475px',
            ...defaultTheme.screens,
        }
    },
    plugins: [],
}
