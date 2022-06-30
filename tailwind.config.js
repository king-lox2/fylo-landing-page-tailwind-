
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px'
  },
    
    extend: {
      colors: {
 brightRed: 'hsl(12, 88%, 59%)',
 brightRedLight: 'hsl(12, 88%, 69%)',
 brightRedSupLight: 'hsl(12, 88%, 95%)',
 darkBlue: 'hsl(228, 39%, 23%)',
 darkGrayishBlue: 'hsl(227, 12%, 61%)',
 veryDarkBlue: 'hsl(233, 12%, 13%)',
 veryPaleRed: 'hsl(13, 100%, 96%)',     
 veryLightGray: 'hsl(0, 0%, 98%)' ,
 veryDarkBluee: 'hsl(243, 87%, 12%)',
 desaturatedBlue: 'hsl(238, 22%, 44%)',
 lightGrayishBlue: 'hsl(240, 75%, 98%)',
 lightGray: 'hsl(0, 0%, 75%)',
 brightBlue: 'hsl(224, 93%, 58%)',
 moderateCyan: 'hsl(170, 45%, 43%)',
      },
  fontFamily : {
        body: ['Open Sans', 'sans-serif'],
        typo: ['Raleway', 'sans-serif']
      }
      
    },
  },
  plugins: [],
}
