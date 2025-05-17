import CallToAction from "@/components/call-to-action";
import ContentSection from "@/components/content-3";
import Features from "@/components/features-1";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Chatbot from "@/components/Chatbot"



export default function Home() {
  return (
    <>
      <HeroSection />
      <Chatbot />
      <Features />
      <ContentSection />
      <CallToAction />
      <FooterSection />
    </>
  );
}
