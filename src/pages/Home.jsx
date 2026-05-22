import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import FeaturedSection from '@/components/home/FeaturedSection';
import CategoriesSection from '@/components/home/CategoriesSection';
import StatsSection from '@/components/home/StatsSection';
import JournalSection from '@/components/home/JournalSection';
import CtaSection from '@/components/home/CtaSection';

const Home = () => (
  <main className="bg-black">
    <HeroSection />
    <AboutSection />
    <FeaturedSection />
    <CategoriesSection />
    <StatsSection />
    <JournalSection />
    <CtaSection />
  </main>
);

export default Home;
