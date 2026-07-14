import { Link } from 'react-router-dom';
import { HeroSection, FeaturesSection } from '@/components/landing/LandingSections';
import ContactSection from '@/components/landing/ContactSection';
import { Users } from 'lucide-react';

const Navbar = () => (
  <nav className="bg-white border-b border-gray-200 sticky top-0 z-10">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">A</span>
        </div>
        <span className="font-bold text-gray-900 text-lg">Acme</span>
      </div>
      <div className="flex items-center gap-6">
        <a href="#features" className="text-sm text-gray-600 hover:text-gray-900 font-medium transition-colors hidden sm:block">
          Features
        </a>
        <a href="#contact" className="text-sm text-gray-600 hover:text-gray-900 font-medium transition-colors hidden sm:block">
          Contact
        </a>
        <Link
          to="/contacts"
          className="flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-700 font-semibold transition-colors"
        >
          <Users className="w-4 h-4" />
          <span className="hidden sm:inline">View contacts</span>
        </Link>
      </div>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="bg-gray-900 text-gray-400 py-10">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-indigo-500 rounded flex items-center justify-center">
          <span className="text-white font-bold text-xs">A</span>
        </div>
        <span className="text-white font-semibold">Acme</span>
      </div>
      <p className="text-sm">© {new Date().getFullYear()} Acme Inc. All rights reserved.</p>
    </div>
  </footer>
);

const LandingPage = () => (
  <div className="min-h-screen bg-white">
    <Navbar />
    <HeroSection />
    <FeaturesSection />
    <ContactSection />
    <Footer />
  </div>
);

export default LandingPage;
