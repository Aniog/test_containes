import React from "react";
import HomeHero from "@/components/home/HomeHero";
import TrustBar from "@/components/home/TrustBar";
import HomeBestsellers from "@/components/home/HomeBestsellers";
import HomeReels from "@/components/home/HomeReels";
import HomeCategories from "@/components/home/HomeCategories";
import HomeStory from "@/components/home/HomeStory";
import HomeTestimonials from "@/components/home/HomeTestimonials";
import HomeNewsletter from "@/components/home/HomeNewsletter";

export default function Home() {
  return (
    <>
      <HomeHero />
      <TrustBar />
      <HomeBestsellers />
      <HomeReels />
      <HomeCategories />
      <HomeStory />
      <HomeTestimonials />
      <HomeNewsletter />
    </>
  );
}