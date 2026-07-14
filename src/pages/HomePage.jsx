import React from "react";
import Hero from "@/components/home/Hero";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Bestsellers from "@/components/home/Bestsellers";
import UGCReel from "@/components/home/UGCReel";
import CategoryTiles from "@/components/home/CategoryTiles";
import BrandStory from "@/components/home/BrandStory";
import Testimonials from "@/components/home/Testimonials";
import Newsletter from "@/components/home/Newsletter";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AnnouncementBar tone="dark" />
      <Bestsellers />
      <UGCReel />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </>
  );
}
