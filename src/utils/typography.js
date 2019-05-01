import Typography from "typography"

const typography = new Typography({
    baseFontSize: '16px',
    baseLineHeight: 1.666,
    headerFontFamily: ['Raleway', 'Helvetica Neue', 'sans-serif'],
    headerWeight: '400',
    bodyFontFamily: ['Open sans', 'Helvetica', 'sans-serif'],
    bodyWeight: 500,
    headerGrayHue: 199,
    headerGrayHue: 25,
})


export const { salce, rhythm, options} = typography;
export default typography;