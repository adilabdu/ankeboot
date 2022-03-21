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
                    50: 'rgba(255, 51, 51, 0.50)',
                    100: '#FF3333'
                },
                about: {
                    25: 'rgba(155, 209, 2, 0.25)',
                    50: 'rgba(155, 209, 2, 0.50)',
                    100: '#9BD102'
                },
                books: {
                    25: 'rgba(158, 124, 255, 0.25)',
                    50: 'rgba(158, 124, 255, 0.50)',
                    100: '#9E7CFF'
                },
                publishing: {
                    25: 'rgba(123, 223, 255, 0.25)',
                    50: 'rgba(123, 223, 255, 0.50)',
                    100: '#7BDFFF'
                },
                maps: {
                    25: 'rgba(13, 159, 0, 0.25)',
                    50: 'rgba(13, 159, 0, 0.50)',
                    100: '#0D9F00'
                },
                programs: {
                    25: 'rgba(160, 187, 255, 0.25)',
                    50: 'rgba(160, 187, 255, 0.50)',
                    100: '#A0BBFF'
                },
                services: {
                    25: 'rgba(202, 170, 1, 0.25)',
                    50: 'rgba(202, 170, 1, 0.50)',
                    100: '#CAAA01'
                },
                resources: {
                    25: 'rgba(73, 126, 205, 0.25)',
                    50: 'rgba(73, 126, 205, 0.50)',
                    100: '#497ECD'
                },
                contact: {
                    25: 'rgba(171, 8, 155, 0.25)',
                    50: 'rgba(171, 8, 155, 0.50)',
                    100: '#AB089B'
                }
            },
            fontFamily: {
                'hero': ['Rakkas'],
                'amh': ['Fantuwua'],
                'sans': ['Arial']
            },
            animation: {
                'tada': 'tada 0.5s ease infinite',
                'rotate-slow': 'rotate 10s linear infinite'
            },
            keyframes: {
                tada: {
                    '0%': { transform: 'scale3d(1, 1, 1)' },
                    '10%, 20%': { transform: 'scale3d(.95, .95, .95) rotate3d(0, 0, 1, -10deg)' },
                    '30% 50% 70% 90%': { transform: 'scale3d(1, 1, 1) rotate3d(0, 0, 1, 10deg)' },
                    '40% 60% 80%': { transform: 'rotate3d(0, 0, 1, -10deg)' },
                    '100%': { transform: 'scale3d(1, 1, 1)' },
                },
                rotate: {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                }
            },
            screens: {
                'xs': '475px'
            },
            aspectRatio: {
                '4/3': '4 / 3'
            },
            scale: {
                '60': '0.6',
                '70': '0.7'
            }
        },
        height: theme => ({
            auto: 'auto',
            ...theme('spacing'),
            full: '100%',
            screen: 'calc(var(--vh) * 100)',
        }),
        minHeight: theme => ({
            '0': '0',
            ...theme('spacing'),
            full: '100%',
            screen: 'calc(var(--vh) * 100)',
        }),
        variants: {
            scrollbar: ['rounded'],
        }
    },
    plugins: [
        require('tailwind-scrollbar'),
        require('tailwindcss-scoped-groups')({
            groups: ['one', ]
        })
    ],
}