'use client'

import Link from "next/link"



export default function ChangeLang({Lang1, Lang2}:{Lang1:string, Lang2:string}) {
    return(
        <div className="flex w-[108px] justify-between flex-col">
            <Link href="/en" locale="en">{Lang1}</Link>
            <Link href="/pl" locale="pl">{Lang2}</Link>
        </div>
    )
}