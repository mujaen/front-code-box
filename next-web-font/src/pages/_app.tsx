import '@/styles/globals.css'
import type { AppProps } from 'next/app'

// pages/_app.js
import localFont from 'next/font/local'

// Font files can be colocated inside of `pages`
const myFont = localFont({
  src: [
    {
      path: '../../public/fonts/PretendardVariable.subset.0.woff2',
      weight: '45 920',
      style: 'normal',
    },
  ],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={myFont.className}>
      <Component {...pageProps} />
    </main>
  )
}
