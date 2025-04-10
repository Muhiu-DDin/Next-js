'use client'
import { WavyBackground } from "./ui/wavy-background";
import instructorsData from "../data/instructorsData"
import { AnimatedTooltip } from "./ui/animated-tooltip";

export default function Instructors(){
return(
    <div className="h-[40rem] relative overflow-hidden flex items-center justify-center">
        <WavyBackground className="max-w-7xl mx-auto flex flex-col w-full h-full justify-center items-center">
            <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-4">Project Personnel</h2>
            <p className="text-base md:text-lg text-white text-center mb-4"> Meet the dedicated members contributing their expertise to our cutting-edge research and innovations</p>
            <div className="flex justify-center items-center flex-row mb-10 w-full">
                <AnimatedTooltip  items={instructorsData}/>

                
            </div>
        </WavyBackground>
    </div>
)
}