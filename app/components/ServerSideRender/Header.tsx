import styles from './ServerStyles/header.module.css'
import { ThemeChange } from '../ClientSideRender/ThemeChange'
export default function Header({Part1, Part2, Part3, ParagHeader, Lang1, Lang2}:{Part1:string, Part2:string, Part3:string, ParagHeader:string, Lang1:string, Lang2:string}) {
    return(
        <>
            <div><ThemeChange Lang1={Lang1} Lang2={Lang2}/></div>
            <div className="w-full h-[700px] flex text-center flex-col justify-center items-center">
                <h1 className="text-[50px]">{Part1}<span className="text-orange-500 dark:text-amber-300">{Part2}</span>{Part3}</h1>
                <p className="text-[30px] mt-10 mb-7">{ParagHeader}</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`h-14 w-14 ${styles.animateArrow}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>
            </div>
        </>

    )
}