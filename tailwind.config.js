/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],  
        openSans: ['Open Sans', 'sans-serif'],
        ptSans: ['PT Sans', 'sans-serif'],  
        poppins: ['Poppins', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif']
      },
      colors : {
        custom : {
          additional: '#74777E',
          primary: '#FF6E30',
          background: '#EDEEF1',
          blackboard: '#2C353D',
          textboard: '#55606B',
          graytext: '#748FB5',
          border: '#DCE0E9',
          boldtext: '#272E35',
          deepcoral: '#FC4B00',
          whiteboard: '#F6F6F7'
        }
      }
    },
  },
  plugins: [],
}