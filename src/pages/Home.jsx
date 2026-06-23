import HomeHero from '@/components/home/HomeHero';
import MicroGallery from '@/components/home/MicroGallery';
import ScaleSection from '@/components/home/ScaleSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <HomeHero />
      <MicroGallery />
      <ScaleSection />
      
      <footer className="py-8 text-center text-slate-500 text-sm border-t border-slate-900">
        <p>© 2026 The MicroCosmos Explorer. All rights reserved.</p>
      </footer>
    </main>
  );
}
