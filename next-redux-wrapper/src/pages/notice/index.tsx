import { useAppSelector } from 'hooks/useReduxQuery'
import { selectCount } from 'reducers/counter/counterSlice'

function Notice() {
  const count = useAppSelector(selectCount)
  return <>{count}</>
}

export default Notice
