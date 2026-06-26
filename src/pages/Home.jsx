import React from "react";
import HomeHero from "@/components/home/HomeHero";
import HomeIntro from "@/components/home/HomeIntro";
import HomeProducts from "@/components/home/HomeProducts";
import HomeCapabilities from "@/components/home/HomeCapabilities";
import HomeIndustries from "@/components/home/HomeIndustries";
import HomeProcess from "@/components/home/HomeProcess";
import HomeTestimonials from "@/components/home/HomeTestimonials";
import HomeCTA from "@/components/home/HomeCTA";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeIntro />
      <HomeProducts />
      <HomeCapabilities />
      <HomeIndustries />
      <HomeProcess />
      <HomeTestimonials />
      <HomeCTA />
    </>
  );
}