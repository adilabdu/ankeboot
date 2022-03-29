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
                'rotate-slow': 'rotate 10s linear infinite',
                'scale-up-down': 'scaleUpBack 2100ms 2000ms ease-in-out',
                'somersault-up': 'somersaultUp 2100ms 2000ms ease-in-out',
                'scale-up': 'scaleUp 500ms 2000ms',
                'somersault-down': 'somersaultDown 2100ms 2000ms ease-in-out',
                'appear': 'appear 2100ms 2000ms',
                'slide-in': 'slideIn 300ms 2000ms',
                'grow-skew': 'growSkew 500ms 3600ms forwards',
                'grow-up': 'growUp 1000ms forwards',
                'fadeout': 'fadeout 500ms 2000ms forwards',
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
                },
                scaleUpBack: {
                    '0%': { transform: 'scale(0) translateY(0%)' },
                    '50%': { transform: 'scale(1.75)' },
                    '100%': { transform: 'scale(1) translateY(-5%);' }
                },
                scaleUp: {
                    '0%': { transform: 'scale(0.75)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' }
                },
                somersaultUp: {
                    '0%': { transform: 'translateY(100%) rotate(-270deg) scale(125%)', '-webkit-transform': 'translateY(100%) rotate(-270deg) scale(125%)' },
                    '55%': { transform: 'translateY(100%) rotate(-270deg) scale(125%)', '-webkit-transform': 'translateY(100%) rotate(-270deg) scale(125%)' },
                    '100%': { transform: 'translateY(0%) rotate(0deg) scale(100%)', '-webkit-transform': 'translateY(0%) rotate(0deg) scale(100%)' }
                },
                somersaultDown: {
                    '0%': { transform: 'translateY(-100%) rotate(270deg) scale(125%)', '-webkit-transform': 'translateY(-100%) rotate(270deg) scale(125%)' },
                    '55%': { transform: 'translateY(-100%) rotate(270deg) scale(125%)', '-webkit-transform': 'translateY(-100%) rotate(270deg) scale(125%)' },
                    '100%': { transform: 'translateY(0%) rotate(0deg) scale(100%)', '-webkit-transform': 'translateY(0%) rotate(0deg) scale(100%)' }
                },
                appear: {
                    '0%': { boxShadow: '0 0 #0000', backgroundColor: 'transparent' },
                    '85%': { boxShadow: '0 0 #0000', backgroundColor: 'transparent' },
                    '100%': { boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)', backgroundColor: 'white' }
                },
                slideIn: {
                    '0%': { opacity: '0', transform: 'translateX(-0.75rem)' },
                    '100%': { opacity: '1', transform: 'translateX(0%)' }
                },
                growSkew: {
                    '0%': { transform: 'skewX(0deg) scaleY(0)', opacity: '1' },
                    '50%': { transform: 'skewX(0deg) scaleY(1)', opacity: '1' },
                    '100%': { transform: 'skewX(-12deg) scaleY(1)', opacity: '1' }
                },
                growUp: {
                    '0%': { transform: 'scale(0)' },
                    // '50%': { transform: 'scale(1)'},
                    '100%': { transform: 'scale(1)' },
                },
                fadeout: {
                    '100%': { opacity: '0', visibility: 'hidden' }
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
                '100': '100',
                '900': '900',
                'max': '1000'
            },
            rotate: {
                '270': '270deg',
                '360': '360deg'
            }
        },
    },
    plugins: [],
}