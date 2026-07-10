import React from "react";
import { Hero } from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import Bestsellers from "@/components/home/Bestsellers";
import Reels from "@/components/home/Reels";
import CategoryTiles from "@/components/home/CategoryTiles";
import Story from "@/components/home/Story";
import Testimonials from "@/components/home/Testimonials";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <Reels />
      <CategoryTiles />
      <Story />
      <Testimonials />
      <Newsletter />
    </>
  );
}
