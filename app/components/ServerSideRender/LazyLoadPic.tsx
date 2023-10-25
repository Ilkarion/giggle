import deltalainRame from '../../../public/deltainRame.jpeg'
import futureTech from '../../../public/futureTech.jpeg'
import memoryHappines from '../../../public/memoryHappines.jpeg'
import netureBird from '../../../public/netureBird.jpeg'
import sova from '../../../public/pticy-sovy.jpeg'
import Pic from '../ClientSideRender/Pic'
export default function LazyLoadPic() {
    const pics = [deltalainRame.src, futureTech.src, memoryHappines.src, netureBird.src, sova.src, deltalainRame.src, futureTech.src, memoryHappines.src, netureBird.src, sova.src]
    return (
        <div className='flex items-center flex-col gap-6'>
            {pics.map((picture, index) => (
                <Pic key={index} picture={picture} />
            ))}
        </div>
    )
}