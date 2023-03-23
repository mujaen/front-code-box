import { Theme } from '@emotion/react'

interface ThemeGroup {
  light: Theme
  dark: Theme
}

const light = {
  bg: {
    primary: '#FFFFFF',
    secondary: '#EEEEEE',
  },
  text: {
    primary: '#000000',
    secondary: '#222222',
  },
  button: {
    primary: '#C069F2',
    secondary: '#000000',
  },
}

const dark = {
  bg: {
    primary: '#000000',
    secondary: '#333333',
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#EEEEEE',
  },
  button: {
    primary: '#F28769',
    secondary: '#000000',
  },
}

export const mode: ThemeGroup = {
  light: { ...light },
  dark: { ...dark },
}
