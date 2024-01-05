/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                sm: '480px',
                md: '768px',
                lg: '976px',
                xl: '1440px',
            },
            colors: {
                'primary': 'rgb(6,114,162)',
                'primary-dim': 'rgb(5,99,141)',
                'primary-dimmer': 'rgb(3,71,101)',
                'on-primary': 'rgb(255 255 255)',
                'secondary': 'rgb(80 96 111)',
                'secondary-dim': 'rgb(64 77 89)',
                'secondary-dimmer': 'rgb(48 57 67)',
                'on-secondary': 'rgb(255 255 255)',
                'tertiary': 'rgb(52,133,85)',
                'tertiary-dim': 'rgb(41,108,70)',
                'on-tertiary': 'rgb(255 255 255)',
                'background': 'rgb(247 249 255)',
                'on-background': 'rgb(24 28 32)',
                'surface': 'rgb(247 249 255)',
                'on-surface': 'rgb(24 28 32)',
            }
        },
    },
    plugins: [],
}

