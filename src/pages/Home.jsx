import React from "react";
import SiteHeader from "@/components/home/SiteHeader";
import HeroSection from "@/components/home/HeroSection";
import IndustriesBar from "@/components/home/IndustriesBar";
import AboutSection from "@/components/home/AboutSection";
import ProductsSection from "@/components/home/ProductsSection";
import TechnologySection from "@/components/home/TechnologySection";
import ApplicationsSection from "@/components/home/ApplicationsSection";
import ProcessSection from "@/components/home/ProcessSection";
import SpecificationsSection from "@/components/home/SpecificationsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ContactSection from "@/components/home/ContactSection";
import SiteFooter from "@/components/home/SiteFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <SiteHeader />
      <main>
        <HeroSection />
        <IndustriesBar />
        <AboutSection />
        <ProductsSection />
        <TechnologySection />
        <ApplicationsSection />
        <ProcessSection />
        <SpecificationsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
