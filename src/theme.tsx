import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  // for collor you can use https://smart-swatch.netlify.app/
  colors: {
    black: '#16161D',
    primary: '#E84C4F',
    secondary: '#EDA345',
    tertiary: '#645DAF',
    primaryText: '#3E4462',
    secondaryText: '#7E7E7E',
    tertiaryText: '#CACACA',
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      'body, html': {
        bgColor: '#F8F5F2',
        color: 'primaryText',
      },
    },
  },
})

export default theme
