'use client'
import { useInView } from "react-intersection-observer"
import styles from './ClientStyles/twoBloks.module.css'
export default function TwoBlocks({Part1SSR, Part2SSR, Part3SSR, Part4SSR, Part1CSR, Part2CSR, Part3CSR}:{Part1SSR:string, Part2SSR:string, Part3SSR:string, Part4SSR:string, Part1CSR:string, Part2CSR:string, Part3CSR:string}) {
    const {ref, inView} = useInView({
        threshold: 0.5,
        triggerOnce: true,
        trackVisibility: true,
        delay: 500

    })
    return (
        <div ref={ref} className="flex flec-row gap-10 text-center justify-center items-center h-[400px] dark:text-black">
            <div className={`w-[200px] h-[200px] bg-slate-200 rounded-md shadow-md relative right-[20%] flex flex-col ${inView ? `flex ${styles.moveLeftBlock}` : 'hidden'}`}>
                <p className="text-orange-400">CSR</p>
                <ul>
                    <li>{Part1CSR}</li>
                    <li>{Part2CSR}</li>
                    <li>{Part3CSR}</li>
                </ul>
            </div>
            <div className={`w-[200px] h-[200px] bg-slate-200 rounded-md shadow-md relative left-[20%] flex flex-col ${inView ? `flex ${styles.moveRightBlock}` : 'hidden'}`}>
                <p className="text-orange-400">SSR</p>
                <ul>
                    <li>{Part1SSR}</li>
                    <li>{Part2SSR}</li>
                    <li>{Part3SSR}</li>
                    <li>{Part4SSR}</li>
                </ul>
            </div>
        </div>
    )
}