import React, { useEffect, useRef } from 'react'

function useInterval(func,delay) {
 const intervalRef=useRef(null)
 useEffect(()=>{
    intervalRef.current=func
 },[func])

 useEffect(()=>{
    let interval
    if(delay===null || delay===undefined){
       return ()=>{
        clearInterval(interval)
       }
    }else{
        interval=setInterval(()=>{
            intervalRef.current()
        },[delay])
        return ()=>{
            clearInterval(interval)
           }
    }
 },[delay])
}
export default useInterval
