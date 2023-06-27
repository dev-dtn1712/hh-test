import { PaletteOptions } from '@mui/material'

export const Colors = {
  primary: '#104C97',
  secondary: '#301A36',
  tint: '#E84855',

  text: '#301A36',
  lightText: '#817783',

  background: '#FFFFFF',
  lightBackground: '#FAF7FA',

  chevronGrey: '#CBC0CD',
  buttonGrey: '#EFEBF0',

  divider: '#F2ECF3',

  success: '#31C46C',
  danger: '#DA2F2F',
  warning: '#FFB30F',

  transparent: 'transparent',
  white: '#FFFFFF',
  black: '#000000',
  blue: '#4285F6'
}

declare module '@mui/material/styles' {
  interface Palette {
    light: Palette['primary']
    tint: Palette['primary']
    blue: Palette['primary']
    black: Palette['primary']
  }

  interface PaletteOptions {
    light: PaletteOptions['primary']
    tint: PaletteOptions['primary']
    blue: PaletteOptions['primary']
    black: PaletteOptions['primary']
  }

  interface TypeBackground {
    light: string
  }
}

export const palette: PaletteOptions = {
  primary: {
    main: Colors.primary
  },
  tint: {
    main: Colors.tint
  },
  light: {
    main: Colors.lightText
  },
  blue: {
    main: Colors.blue,
    contrastText: Colors.white
  },
  black: {
    main: Colors.black,
    contrastText: Colors.white
  },
  secondary: {
    main: Colors.secondary
  },
  error: {
    main: Colors.danger
  },
  warning: {
    main: Colors.warning
  },
  success: {
    main: Colors.success
  },
  text: {
    primary: Colors.text,
    secondary: Colors.lightText,
    disabled: Colors.lightText
  },
  divider: Colors.divider,
  grey: {
    700: Colors.buttonGrey,
    500: Colors.chevronGrey
  },
  background: {
    default: Colors.background,
    paper: Colors.background,
    light: Colors.lightBackground
  }
}
