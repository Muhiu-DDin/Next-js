"use client"
import { Spotlight } from "./ui/Spotlight";
import UploadForm from "./upload";


export default function HeroSection() {
 
    return (
        <div className="h-auto md:h-[40rem] flex flex-col justify-center items-center w-full py-20 md:py-0 overflow-hidden relative mx-auto">
            <div className="p-4 z-10 relative w-full text-center">
                <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

                <h1 className="md:mt-10  text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                    AI-Powered Image Dehazing
                </h1>
                <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
                    Enhance the clarity of your images with our AI-driven dehazing model.  
                    Using the AOT-based deep learning approach, our system restores visibility  
                    and detail in hazy images effortlessly. Try it now!
                </p>
                <div>
                    <UploadForm />
                </div>
            </div>
        </div>
    );
}
