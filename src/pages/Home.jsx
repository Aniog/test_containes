import HeroSection from '@/components/landing/HeroSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import ContactSection from '@/components/landing/ContactSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <ContactSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
          <p>© {new Date().getFullYear()} ContactUs. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
