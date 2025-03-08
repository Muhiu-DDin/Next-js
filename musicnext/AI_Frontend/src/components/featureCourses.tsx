'use client'
import Link from "next/link";
import solutionData from "../data/constant.json";
import { BackgroundGradient } from "./ui/background-gradient";

export default function FeatureSolutions() {
    
    interface Solution {
        id: number;
        title: string;
        slug: string;
        description: string;
        researcher: string;
        isFeatured: boolean;
    }

    const features = solutionData.solutions.filter(
        (obj: Solution) => obj.isFeatured
    );

    return (
        <div className="py-12 px-5 bg-gray-900">
            <div>
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED SOLUTIONS</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                        AI-Powered Dehazing Technologies
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-8">
                {features.map((solution: Solution) => (
                    <div key={solution.id} className="flex py-10 justify-center items-center">
                        <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                            <div className="p-5 sm:p-6 flex flex-col items-center text-center flex-grow">
                                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{solution.title}</p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{solution.description}</p>
                                <Link className="mt-4" href={`/solutions/${solution.slug}`}>Learn more</Link>
                            </div>
                        </BackgroundGradient>
                    </div>
                ))}
            </div>

            <div className="mt-16 text-center">
                <h3 className="text-xl font-bold text-white mb-4">Key AI Libraries for Dehazing</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h4 className="text-lg font-semibold text-teal-400">NumPy</h4>
                        <p className="text-sm text-gray-300 mt-2">
                            Efficiently handles numerical operations, used for image array manipulations, 
                            matrix operations, and pixel normalization.
                        </p>
                    </div>

                 
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h4 className="text-lg font-semibold text-teal-400">Matplotlib</h4>
                        <p className="text-sm text-gray-300 mt-2">
                            Helps visualize original and dehazed images, training progress, and pixel intensity histograms.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h4 className="text-lg font-semibold text-teal-400">PyTorch</h4>
                        <p className="text-sm text-gray-300 mt-2">
                            Deep learning framework for implementing CNNs/GANs, performing tensor operations, and training dehazing models.
                        </p>
                    </div>

            
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h4 className="text-lg font-semibold text-teal-400">PyTorch Lightning</h4>
                        <p className="text-sm text-gray-300 mt-2">
                            Simplifies deep learning model training with automatic checkpointing, logging, and distributed training.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
