import HomeHero from "../components/home/HomeHero";
import { TrustBar } from "../components/home/TrustBar";
import BestSellers from "../components/home/BestSellers";
import UGCReel from "../components/home/UGCReel";
import ShopByCategory from "../components/home/ShopByCategory";
import BrandStory from "../components/home/BrandStory";
import Testimonials from "../components/home/Testimonials";
import Newsletter from "../components/home/Newsletter";

export default function Home() {
  return (
    <div className="w-full">
      <HomeHero />
      <TrustBar />
      <BestSellers />
      <UGCReel />
      <ShopByCategory />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  );
}