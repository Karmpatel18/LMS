import TypingAnimation from "../TypingAnimation"
import { Globe } from "./Globe"

function Hero() {
    return (
        <div className="flex flex-col mt-24 ">

            <div className='flex flex-col text-center items-center justify-center absolute inset-x-0  mt-6   '>
                <div className="flex  flex-col cursor-default leading-9  text-center text-4xl tracking-tighter  font-bold bg-gradient-to-r from-neutral-900 via-neutral-600 to-neutral-400 bg-clip-text text-transparent">
                    Your one-stop solution
                    </div>
                    <TypingAnimation className={"italic flex text-center -mt-6 font-normal tracking-tighter text-xl bg-gradient-to-r from-neutral-900 via-neutral-600 to-neutral-400 bg-clip-text text-transparent"}
                    duration={55}
                    >
                        to search, borrow, and manage books seamlessly!
                    </TypingAnimation>
               

            </div>
            <div className='relative mt-[38px] -z-[1]  flex scale-[68%] sm:scale-[100%] justify-center'>
                <Globe />
            </div>


        </div>
    )
}

export default Hero
