import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Matches from '@/components/home/Matches';
import Standings from '@/components/home/Standings';
import TopScorers from '@/components/home/TopScorers';
import Bracket from '@/components/home/Bracket';
import Venues from '@/components/home/Venues';

const Home = () => {
  return (
    <div className="min-h-screen bg-wc-bg text-white">
      <Navbar />
      <main>
        <Hero />
        <Matches />
        <Standings />
        <TopScorers />
        <Bracket />
        <Venues />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
