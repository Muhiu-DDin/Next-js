'use client'
import { HoverEffect } from "./ui/card-hover-effect"
import featuredWebinar from "../data/webinar"

export default function Webinar(){
    return(
        <div className="p-12 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED TOPICS</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                        Deep Learning for Image Dehazing
                    </p>
                </div>
                <div className="mt-10">
                    <HoverEffect items={featuredWebinar.map(
                        (topic) => ({
                            title: topic.title,
                            description: topic.description,
                            link: topic.slug
                        })
                    )}/>
                </div>
            </div>
        </div>
    )
}
