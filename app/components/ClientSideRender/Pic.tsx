'use client'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
export default function Pic({picture}:{picture:string}) {
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.4,
    })
    return (
        <>
            <div ref={ref} className="w-[200px] h-[200px] flex gap-4 flex-col">
                {inView ? (<Image src={picture} alt="neture & future" width={100} height={100} className='w-[100%] h-[100%] object-cover'/>) : ''}
            </div>
        </>
        
    )
}