import React from "react";
import Hero from "@/components/home/Hero.jsx";
import TrustBar from "@/components/home/TrustBar.jsx";
import Bestsellers from "@/components/home/Bestsellers.jsx";
import UgcReel from "@/components/home/UgcReel.jsx";
import CategoryTiles from "@/components/home/CategoryTiles.jsx";
import BrandStory from "@/components/home/BrandStory.jsx";
import Testimonials from "@/components/home/Testimonials.jsx";
import Newsletter from "@/components/home/Newsletter.jsx";

const HomePage = () => (
  <>
    <Hero />
    <TrustBar />
    <Bestsellers />
    <UgcReel />
    <CategoryTiles />
    <BrandStory />
    <Testimonials />
    <Newsletter />
  </>
);

export default HomePage;
