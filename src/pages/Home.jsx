import React from "react";
import HomeHero from "@/components/home/HomeHero";
import HomeBestsellers from "@/components/home/HomeBestsellers";
import HomeUgcReel from "@/components/home/HomeUgcReel";
import HomeShopByCategory from "@/components/home/HomeShopByCategory";
import HomeStory from "@/components/home/HomeStory";
import HomeTestimonials from "@/components/home/HomeTestimonials";
import HomeNewsletter from "@/components/home/HomeNewsletter";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeBestsellers />
      <HomeUgcReel />
      <HomeShopByCategory />
      <HomeStory />
      <HomeTestimonials />
      <HomeNewsletter />
    </>
  );
}
