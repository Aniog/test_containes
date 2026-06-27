import React from "react";
import TopBar from "../sections/TopBar";
import Breadcrumb from "../sections/Breadcrumb";
import Hero from "../sections/Hero";
import FeaturedGenerators from "../sections/FeaturedGenerators";
import BrowseByCategory from "../sections/BrowseByCategory";
import AllGenerators from "../sections/AllGenerators";
import HowItWorks from "../sections/HowItWorks";
import WhyStrikingly from "../sections/WhyStrikingly";
import FAQ from "../sections/FAQ";
import ClosingCTA from "../sections/ClosingCTA";
import Footer from "../sections/Footer";

export default function GeneratorsPage() {
  return (
    <div className="strk-page">
      <TopBar />
      <Breadcrumb />
      <main>
        <Hero />
        <FeaturedGenerators />
        <BrowseByCategory />
        <AllGenerators />
        <HowItWorks />
        <WhyStrikingly />
        <FAQ />
        <ClosingCTA />
      </main>
      <Footer />
    </div>
  );
}