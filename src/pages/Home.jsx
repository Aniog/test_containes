import PageTransition from '@/components/layout/PageTransition';
import SplitHero from '@/components/home/SplitHero';
import HomeManifesto from '@/components/home/HomeManifesto';
import HomeFeaturedQuote from '@/components/home/HomeFeaturedQuote';

export default function Home() {
  return (
    <PageTransition>
      <SplitHero />
      <HomeManifesto />
      <HomeFeaturedQuote />
    </PageTransition>
  );
}
