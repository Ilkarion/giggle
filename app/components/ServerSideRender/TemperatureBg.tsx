import Counter from "../ClientSideRender/Counter";

export default function TemperatureBg({TempAirCond, TempAutoCooling}:{TempAirCond:string, TempAutoCooling:string}) {
    return(
        <>
            <div className="w-[300px] h-[200px] bg-[#FFFFFF] rounded-lg p-1.5 mx-auto shadow-xl shadow-orange-400 hover:shadow-none dark:text-black">
                <h2 className="text-[12px] dark:text-black">{TempAirCond}</h2>
                <p className="text-[8px] dark:text-black">{TempAutoCooling}</p>
                <Counter />
            </div>
        </>
    )
}