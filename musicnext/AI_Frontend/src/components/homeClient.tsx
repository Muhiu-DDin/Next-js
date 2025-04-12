'use client';
import FeatureCourses from "@/components/featureCourses";
import HeroSection from "@/components/heroSection";
import WhyToChoose from "@/components/whyToChoose";
import TestimonialCards from "@/components/testimonialCards";
import Webinar from "@/components/webinar";
import Instructors from "@/components/instructors";
import Footer from "@/components/footer";

export default function HomeClient() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeatureCourses />
      <WhyToChoose />
      <TestimonialCards />
      <Webinar />
      <Instructors />
      <Footer />
    </main>
  );
}
