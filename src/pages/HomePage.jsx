import HomeHero from '@/components/home/HomeHero';
import FeaturedCollection from '@/components/home/FeaturedCollection';
import BrandStatement from '@/components/home/BrandStatement';
import CollectionBanner from '@/components/home/CollectionBanner';
import JournalPreview from '@/components/home/JournalPreview';

export default function HomePage() {
  return (
    <div className="fade-in">
      <HomeHero />
      <FeaturedCollection />
      <BrandStatement />
      <CollectionBanner />
      <JournalPreview />
    </div>
  );
}
