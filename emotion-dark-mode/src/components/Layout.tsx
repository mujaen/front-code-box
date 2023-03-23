import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

function Layout({ children }: Props) {
  return <header>{children}</header>
}

export default Layout
