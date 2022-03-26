module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                home: {
                    25: '#ffcccc',
                    50: '#ff9999',
                    100: '#ff3333'
                },
                about: {
                    25: '#e6f4c0',
                    50: '#cde881',
                    100: '#9bd102'
                },
                books: {
                    25: '#e7deff',
                    50: '#cfbeff',
                    100: '#9e7cff'
                },
                publishing: {
                    25: '#def7ff',
                    50: '#bdefff',
                    100: '#7bdfff'
                },
                maps: {
                    25: '#c3e7bf',
                    50: '#86cf80',
                    100: '#0d9f00'
                },
                programs: {
                    25: '#e7eeff',
                    50: '#d0ddff',
                    100: '#a0bbff'
                },
                services: {
                    25: '#f2eac0',
                    50: '#e5d580',
                    100: '#caaa01'
                },
                resources: {
                    25: '#d2dff3',
                    50: '#a4bfe6',
                    100: '#497ecd'
                },
                contact: {
                    25: '#eac1e6',
                    50: '#d584cd',
                    100: '#ab089b'
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
                '4/3': '4 / 3',
                '3/2': '3 / 2',
                '2/3': '2 / 3'
            },
            scale: {
                '60': '0.6',
                '70': '0.7'
            },
            translate: {
                '1/5': '20%',
                '1/10': '10%',
                '1/20': '5%'
            },
            zIndex: {
                '100': '100'
            },
            rotate: {
                '270': '270deg',
                '360': '360deg'
            }
        },
    },
    plugins: [],
}