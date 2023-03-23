import styled from '@emotion/styled'

import { useTheme } from '@emotion/react'

const StyledButton = styled.button`
  color: ${({ theme }) => theme.button.primary};
`

export default function Home() {
  const theme = useTheme()

  return (
    <>
      <main>
        <StyledButton theme={theme}>버튼</StyledButton>
      </main>
    </>
  )
}
