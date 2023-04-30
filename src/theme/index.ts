import { extendTheme } from 'native-base'

export const THEME = extendTheme({
  colors: {
    blue: {
      500: '#364D9D',
      100: '#647AC7',
      50: '#647AC710'
    },
    red: {
      100: '#EE7979'
    },
    gray: {
      100: '#1A181B',
      200: '#3E3A40',
      300: '#5F5B62',
      400: '#9F9BA1',
      500: '#D9D8DA',
      600: '#EDECEE',
      700: '#F7F7F8'
    }
  },
  fonts: {
    heading: 'Karla_700Bold',
    body: 'Karla_400Regular',
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
  },
  sizes: {
    18: 76,
    11: 45,
    14: 56,
    22: 88,
  }
})