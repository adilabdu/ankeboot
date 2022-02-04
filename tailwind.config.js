const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                home: {
                    25: 'rgba(255, 51, 51, 0.25)',
                    100: '#FF3333'
                },
                about: {
                    25: 'rgba(155, 209, 2, 0.25)',
                    100: '#9BD102'
                },
                books: {
                    25: 'rgba(158, 124, 255, 0.25)',
                    100: '#9E7CFF'
                },
                publishing: {
                    25: 'rgba(123, 223, 255, 0.25)',
                    100: '#7BDFFF'
                },
                maps: {
                    25: 'rgba(160, 187, 255, 0.25)',
                    100: '#A0BBFF'
                },
                programs: {
                    25: 'rgba(13, 159, 0, 0.25)',
                    100: '#0D9F00'
                },
                services: {
                    25: 'rgba(202, 170, 1, 0.25)',
                    100: '#CAAA01'
                },
                resources: {
                    25: 'rgba(73, 126, 205, 0.25)',
                    100: '#497ECD'
                },
                contact: {
                    25: 'rgba(171, 8, 155, 0.25)',
                    100: '#AB089B'
                }
            }
        },
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
