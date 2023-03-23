import { ThemeMode } from '@emotion/react'
import { theme } from 'styles/theme'

type ThemeMode = typeof theme

declare module '@emotion/react' {
  export interface Theme extends ThemeMode {
    bg: {
      primary: string
      secondary: string
    }
    text: {
      primary: string
      secondary: string
    }
    button: {
      primary: string
      secondary: string
    }
  }
}