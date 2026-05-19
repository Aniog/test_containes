import HomeHero from '@/components/home/HomeHero';
import HomeFeatured from '@/components/home/HomeFeatured';
import HomeStats from '@/components/home/HomeStats';
import HomeGalleryPreview from '@/components/home/HomeGalleryPreview';
import HomeFeatures from '@/components/home/HomeFeatures';

export default function Home() {
  return (
    <div>
      <HomeHero />
      <HomeFeatured />
      <HomeStats />
      <HomeGalleryPreview />
      <HomeFeatures />
    </div>
  );
}
