import Link from 'next/link'
import styles from '@/styles/Home.module.css'

import { useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

export default function Home() {

  const { data, isLoading, isFetching, error } = useQuery(['/notice'], () => axios.get('https://211.206.251.66:7000/Notice'))


  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <>
      <main className={styles.main}>
        <Link href="/Notice" legacyBehavior><a>페이지 이동</a></Link>
      </main>
    </>
  )
}
