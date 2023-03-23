import { css, Theme } from '@emotion/react'

const base = (theme: Theme) => css`
  body {
    font-family: Verdana, Arial, sans-serif;
    letter-spacing: -0.01em;
    color: ${theme.text.primary};
    background: ${theme.bg.primary};
  }
  th,
  td {
    display: table-cell;
    vertical-align: inherit;
  }
  a {
    text-decoration: none;
  }
`
export default base
