import Navbar from '@/components/Navbar';
import HeroSection from '@/components/home/HeroSection';
import MatchesSection from '@/components/home/MatchesSection';
import StandingsSection from '@/components/home/StandingsSection';
import TopScorersSection from '@/components/home/TopScorersSection';
import NewsSection from '@/components/home/NewsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <HeroSection />
      <MatchesSection />
      <StandingsSection />
      <TopScorersSection />
      <NewsSection />
      <Footer />
    </div>
  );
}
