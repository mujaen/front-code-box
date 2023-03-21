import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import axios from 'axios'

import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export default function App({ Component, pageProps }: AppProps) {
  const defaultQueryFn = async ({ queryKey }) => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com${queryKey[0]}`,
    )
    return data
  }

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        queryFn: defaultQueryFn,
        retry: false,
        refetchOnReconnect: false,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
