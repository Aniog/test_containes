import { HomeHero } from "@/components/home/HomeHero";
import { TrustBar } from "@/components/home/TrustBar";
import { HomeBestsellers } from "@/components/home/HomeBestsellers";
import { HomeReel } from "@/components/home/HomeReel";
import { HomeCategories } from "@/components/home/HomeCategories";
import { HomeStory } from "@/components/home/HomeStory";
import { HomeTestimonials } from "@/components/home/HomeTestimonials";
import { HomeNewsletter } from "@/components/home/HomeNewsletter";

export default function Home() {
  return (
    <div className="bg-bone">
      <HomeHero />
      <TrustBar />
      <HomeBestsellers />
      <HomeReel />
      <HomeCategories />
      <HomeStory />
      <HomeTestimonials />
      <HomeNewsletter />
    </div>
  );
}
