import HeroSection from '@/components/home/HeroSection';
import TrustBar from '@/components/home/TrustBar';
import BestsellersSection from '@/components/home/BestsellersSection';
import UGCRow from '@/components/home/UGCRow';
import CategoryTiles from '@/components/home/CategoryTiles';
import BrandStory from '@/components/home/BrandStory';
import Testimonials from '@/components/home/Testimonials';
import NewsletterCTA from '@/components/home/NewsletterCTA';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TrustBar />
      <ScrollReveal><BestsellersSection /></ScrollReveal>
      <ScrollReveal><UGCRow /></ScrollReveal>
      <ScrollReveal><CategoryTiles /></ScrollReveal>
      <ScrollReveal><BrandStory /></ScrollReveal>
      <ScrollReveal><Testimonials /></ScrollReveal>
      <ScrollReveal><NewsletterCTA /></ScrollReveal>
    </main>
  );
}
