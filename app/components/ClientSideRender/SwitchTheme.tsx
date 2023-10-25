'use client'

import { useState } from "react"
import styles from "../ServerSideRender/ServerStyles/header.module.css"

export default function SwitchTheme({theme}:{theme:string}) {
    const [click, setClick] = useState(false)
    return(
        <>
            <div className={`w-[60px] h-7 shadow-inner shadow-slate-500 rounded-xl flex justify-end items-center pl-[2px] pr-[2px] dark:shadow-gray-500 dark:shadow-sm dark:border-gray-500 dark:border-2`} onClick={()=>setClick(!click)}>
                <div className={`w-5 h-5 bg-orange-400 rounded-lg ${theme === 'dark' ? styles.animateNight : styles.animateDay}`}></div>
            </div>
        </>
    )
}