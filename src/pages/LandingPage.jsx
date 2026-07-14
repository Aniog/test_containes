import HeroSection from '@/components/landing/HeroSection';
import ContactForm from '@/components/landing/ContactForm';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ContactForm />

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-10 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-white font-semibold text-lg">Acme</span>
          <p className="text-sm">© 2026 Acme Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
