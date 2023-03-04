import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [block, setBlock] = useState<string>('')

  const handleOnChange = (e: any) => {
    console.clear() // Clear

    setBlock(e.target.value)
  }

  useEffect(() => {
    // [일반] 위에서 아래로 순차적으로 실행한다. 
    // Result: One - Two - Three
    if(block === 'normal') {
      console.log('One')
      console.log('Two')
      console.log('Three')
    }

    // [호출 스케줄링] 일반 함수 실행 뒤 루프에서 처리된 함수가 나중 실행된다. 
    // Result: One - Three - Two
    if(block === 'schedule') {
      console.log('One')
      setTimeout(() => console.log('Two'), 0)
      console.log('Three')
    }

    // [Promise] 일반 함수 실행 뒤 Microtask 인 Promise가 먼저 실행된다.
    // Result: Four - Two - Three - One
    if(block === 'promise') {
      setTimeout(() => console.log('One'), 0)
      Promise.resolve('Two').then((data) => {
        console.log(data)
        console.log('Three')
      })
      console.log('Four')
    }
  }, [block])

  return (
    <div className="App">
      <select name="" id="" onChange={handleOnChange}>
      <option value="">Select</option>
        <option value="normal">normal</option>
        <option value="schedule">schedule</option>
        <option value="promise">promise</option>
      </select>
    </div>
  );
}

export default App;
