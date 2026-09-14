import { AboutSection } from "@/components/component/AboutSection";
import { ContactBanner } from "@/components/component/contact-banner";
import { ContactSection } from "@/components/component/contact-section";
import { Credentials } from "@/components/component/Credentials";
import { CTA } from "@/components/component/cta";
import { Footer } from "@/components/component/footer";
import { GalleryPrev } from "@/components/component/gallery-prev";
import { Hero } from "@/components/component/hero";
import { Navbar } from "@/components/component/navbar";
import { ServicesSection } from "@/components/component/ServicesSection";
import FloatingVideo from "@/components/FloatingVideo";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <FloatingVideo/>
      <ContactBanner />
      <ServicesSection />
      <AboutSection />
      <GalleryPrev />
      <Credentials />
      <ContactSection />
      <CTA />
    </main>
  );
}
