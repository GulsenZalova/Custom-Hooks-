import React from 'react'
import useWindowSize from '../utils/useWindowSize'
import "../App.css"
function windowSize() {
  const [width,height]=useWindowSize()
  return (
    <div className='windowSizeCase'>
        <h1>useWindowSize Hooks</h1>
      <h4>Width: <span>{width}</span></h4>
      <h4>Height: <span>{height}</span></h4>
    </div>
  )
}

export default windowSize
