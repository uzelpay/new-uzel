import Navbar from "@/components/layout/navbar";
import Footer from "@/components/home/footer";
import Join from "@/components/home/join";
import AboutUsSection from "@/components/about/about-us-section";
import OurStorySection from "@/components/about/our-story-section";
import OurMissionSection from "@/components/about/our-mission-section";
import OurVisionSection from "@/components/about/our-vision-section";
import OurCommitmentSection from "@/components/about/our-commitment-section";

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <AboutUsSection />
      <OurStorySection />
      <OurMissionSection />
      <OurVisionSection />
      <OurCommitmentSection />
      <Join />
      <Footer />
    </div>
  );
}
