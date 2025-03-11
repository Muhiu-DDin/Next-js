import musicSchoolContent from "../data/musicData"
import { StickyScroll } from "./ui/sticky-scroll-reveal"

export default function WhyToChoose() {
  return (
    <div>
      <StickyScroll content={musicSchoolContent} />
    </div>
  );
}
