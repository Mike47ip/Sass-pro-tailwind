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
          textboard: '#55606B'
        }
      }
    },
  },
  plugins: [],
}