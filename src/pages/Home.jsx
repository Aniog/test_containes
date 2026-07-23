import React from "react";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import Bestsellers from "@/components/home/Bestsellers";
import UGCReels from "@/components/home/UGCReels";
import Categories from "@/components/home/Categories";
import Story from "@/components/home/Story";
import Testimonials from "@/components/home/Testimonials";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGCReels />
      <Categories />
      <Story />
      <Testimonials />
      <Newsletter />
    </>
  );
}
