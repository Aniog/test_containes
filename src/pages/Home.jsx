import HomeHero from "../components/home/HomeHero";
import HomeCategories from "../components/home/HomeCategories";
import HomeBestsellers from "../components/home/HomeBestsellers";
import BrandStory from "../components/home/BrandStory";
import HomeTestimonials from "../components/home/HomeTestimonials";
import NewsletterRow from "../components/home/NewsletterRow";

export default function Home() {
  return (
    <div className="min-h-screen pt-0">
      <HomeHero />
      <HomeCategories />
      <HomeBestsellers />
      <BrandStory />
      <HomeTestimonials />
      <NewsletterRow />
    </div>
  );
}