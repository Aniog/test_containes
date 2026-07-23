import Navbar from '@/components/home/Navbar';
import HeroSection from '@/components/home/HeroSection';
import KnowledgeSection from '@/components/home/KnowledgeSection';
import SelfTestSection from '@/components/home/SelfTestSection';
import TipsSection from '@/components/home/TipsSection';
import DataSection from '@/components/home/DataSection';
import FAQSection from '@/components/home/FAQSection';
import ContactSection from '@/components/home/ContactSection';
import Footer from '@/components/home/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <KnowledgeSection />
      <SelfTestSection />
      <TipsSection />
      <DataSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
