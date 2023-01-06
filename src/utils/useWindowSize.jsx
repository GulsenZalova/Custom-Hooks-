import React, { useEffect, useState } from 'react'

function useWindowSize() {
    const windowType=typeof window !=="undefined"
    const [windowSize,setWindowSize]=useState({
        width:windowType ? 1200 : window.innerWidth,
        height:windowType ? 800 : window.innerHeight
    })
     useEffect(()=>{
        window.addEventListener("resize",()=>{
            setWindowSize({width:window.innerWidth, height:window.innerHeight})
        })

        return ()=>{
            window.removeEventListener("resize",()=>{
                setWindowSize({width:window.innerWidth, height:window.innerHeight})
            })
        }
     },[])

  return  [windowSize.width,windowSize.height]
     
  
}

export default useWindowSize
