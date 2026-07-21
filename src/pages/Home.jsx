import ScrollReveal from '../components/ui/ScrollReveal';
import HomeHero from '../components/home/HomeHero';
import TrustBar from '../components/home/TrustBar';
import Bestsellers from '../components/home/Bestsellers';
import UGCReels from '../components/home/UGCReels';
import ShopByCategory from '../components/home/ShopByCategory';
import BrandStory from '../components/home/BrandStory';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';

export default function Home() {
  return (
    <main>
      <HomeHero />
      <ScrollReveal><TrustBar /></ScrollReveal>
      <ScrollReveal delay={100}><Bestsellers /></ScrollReveal>
      <ScrollReveal delay={50}><UGCReels /></ScrollReveal>
      <ScrollReveal><ShopByCategory /></ScrollReveal>
      <ScrollReveal><BrandStory /></ScrollReveal>
      <ScrollReveal><Testimonials /></ScrollReveal>
      <ScrollReveal><Newsletter /></ScrollReveal>
    </main>
  );
}