import testimonialsData from "../data/testimonials";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function TestimonialCards() {
  return (
    <div className="h-[35rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative overflow-hidden flex flex-col justify-center items-center sm:flex-row">
      <h2 className="text-3xl z-10 text-center font-bold mb-8 sm:mb-0">
        AI-Powered Innovations: Voices of Excellence
      </h2>
      <div className="flex flex-col sm:flex-row justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl w-full">
          <InfiniteMovingCards items={testimonialsData} direction="down" speed="slow" />
        </div>
      </div>
    </div>
  );
}
