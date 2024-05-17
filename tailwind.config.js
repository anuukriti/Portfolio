/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                Font1: ["Cinzel Decorative", "serif"],
                Font2: ["Trocchi", "serif"],
            },
        },
    },
    plugins: [],
};
