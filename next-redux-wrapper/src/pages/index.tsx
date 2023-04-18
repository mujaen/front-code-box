import React, { useState } from 'react'

import { useAppSelector, useAppDispatch } from 'hooks/useReduxQuery'
import { decrement, increment, incrementByAmount, selectCount } from 'reducers/counter/counterSlice'

export default function Home() {
  const count = useAppSelector(selectCount)

  const dispatch = useAppDispatch()
  const [incrementAmount, setIncrementAmount] = useState('2')

  return (
    <main>
      <div>
        <button aria-label="Increment value" onClick={() => dispatch(increment())}>
          +
        </button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          -
        </button>
      </div>
      <div>
        <input
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>
          Add Amount
        </button>
      </div>
    </main>
  )
}
