import TypingAnimation from "../TypingAnimation"
import { Globe } from "./Globe"

function Hero() {
    return (
        <div className="flex flex-col mt-24 ">
            <div className="flex justify-center relative">
            <div className='flex flex-col max-w-3xl text-center items-center justify-center absolute inset-x-0  mt-6   '>
                <div className="flex  flex-col cursor-default leading-9  text-center text-4xl tracking-tighter  font-bold bg-gradient-to-r from-neutral-900 via-neutral-600 to-neutral-400 bg-clip-text text-transparent">
                    Your one-stop solution
                </div>
                <div className="flex h-min">
                    <TypingAnimation className={"italic cursor-default flex text-center text-wrap -mt-6 font-normal tracking-tighter text-xl bg-gradient-to-r from-neutral-900 via-neutral-600 to-neutral-400 bg-clip-text text-transparent"}
                    duration={55}
                    >to search, borrow, and manage books seamlessly!
                    </TypingAnimation>
               
                    </div>
            </div>
            </div> 
            <div className='relative mt-[38px] -z-[1]  flex scale-[68%] sm:scale-[100%] justify-center'>
                <Globe />
            </div>
            <div className="flex w-full justify-center -z-[2] ">
            <div className="flex bg-neutral-700 w-full max-w-sm justify-center h-6 mt-[486px] rounded-full blur-[70px]"></div>
            </div>

        </div>
    )
}

export default Hero
