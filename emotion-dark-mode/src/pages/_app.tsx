import type { AppProps } from 'next/app'

import React, { useState, useEffect, useCallback } from 'react'

import { Global, ThemeProvider } from '@emotion/react'

import base from 'styles/base'
import reset from 'styles/reset'
import { mode } from 'styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(mode.light)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    localStorage.setItem('mode', `${isDark ? 'dark' : 'light'}`)

    if (localStorage.getItem('mode') === 'light') {
      setTheme(mode.light)
    }

    if (localStorage.getItem('mode') === 'dark') {
      setTheme(mode.dark)
    }
  }, [isDark])

  const toggleButtonClick = useCallback(() => {
    setIsDark(current => !current)
  }, [isDark])

  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={reset} />
        <Global styles={base(theme)} />

        <Component {...pageProps} />

        <button type="button" onClick={toggleButtonClick}>
          {isDark ? '라이트모드로 보기' : '다크모드로 보기'}
        </button>
      </ThemeProvider>
    </>
  )
}
