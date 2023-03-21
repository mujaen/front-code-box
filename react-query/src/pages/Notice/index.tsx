import { useQueryClient } from '@tanstack/react-query' 



function Notice() {
    const queryClient = useQueryClient();

  const notice = queryClient.getQueryData(['/notice'])

  console.log(
    'data:', notice,
  )

    return (
        <>
            12
        </>
    )
}

export default Notice