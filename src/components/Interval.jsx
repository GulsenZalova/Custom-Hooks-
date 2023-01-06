import React from 'react'
import { useState } from 'react'
import useInterval from '../utils/useInterval'
function Interval() {
    const [func, setFunc] = useState(() => {
        return () => console.log(count)
    })
    const [delay, setDelay] = useState(1000)
    const [inputDelay, setİnputDelay] = useState(1000)
    const [count, setCount] = useState(0)
    useInterval(func, delay)

    const handleCallback=()=>{
        setFunc(()=>{
           setCount(count+1)
            return () => console.log(count) 
        })
      }
    return (
        <div className='intervalCase'>
            <h1>useInterval Hooks</h1>
            <input type="text" value={inputDelay} onChange={(e) => {
                setİnputDelay(e.target.value)
            }} />
            <input type="text" value={count} onChange={(e) => setCount(e.target.value)} />
            <button onClick={() => setDelay(inputDelay)}>Change Delay</button>
            <button onClick={() => handleCallback()}>Change Function</button>
        </div>
    )
}

export default Interval
