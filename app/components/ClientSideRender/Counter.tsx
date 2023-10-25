'use client'
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styles from './ClientStyles/counter.module.css'
export default function Counter() {
    const [num, setNum] = useState(0)

    const { ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.9,
        trackVisibility: true,
        delay: 700
    });
    useEffect (()=>{
        if(!inView) {setNum(0)}
        if (inView && num < 32) {
            let interval = setInterval(()=> {
                setNum((prevNum)=> prevNum+1)
            }, 40)
            return ()=>clearInterval(interval)
        }
    }, [inView, num])

    return(
        <>
            <p ref={ref} className="text-6xl text-center mx-auto mt-5 dark:text-black">{num}°C</p>
            <div className={`w-0 overflow-hidden ${inView && styles.animateIncreaseWidthCounter}`}>
                <div className="h-1 w-[300px] bg-gradient-to-r from-cyan-500 to-red-600"></div>
            </div>
        </>
    )
}