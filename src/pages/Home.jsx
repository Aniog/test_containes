import React, { useEffect } from 'react';
import HomeHero from '@/components/home/HomeHero';
import ServiceHighlights from '@/components/home/ServiceHighlights';
import TrustPoints from '@/components/home/TrustPoints';
import ProcessPreview from '@/components/home/ProcessPreview';
import ProductCategories from '@/components/home/ProductCategories';
import HomeFAQ from '@/components/home/HomeFAQ';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  useEffect(() => {
    document.title = "China Sourcing Agent | Supplier Verification, QC & Shipping | SSourcing China";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col w-full">
      <HomeHero />
      
      {/* Trust Badges / Social Proof */}
      <div className="bg-slate-50 border-y border-slate-100 py-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">500+</span>
              <span className="text-xs uppercase tracking-widest font-semibold text-slate-500">Suppliers Verified</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">1200+</span>
              <span className="text-xs uppercase tracking-widest font-semibold text-slate-500">Inspections Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">15+</span>
              <span className="text-xs uppercase tracking-widest font-semibold text-slate-500">Global Markets Served</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">100%</span>
              <span className="text-xs uppercase tracking-widest font-semibold text-slate-500">Transparent Fees</span>
            </div>
          </div>
        </div>
      </div>

      <ServiceHighlights />
      <TrustPoints />
      <ProcessPreview />
      <ProductCategories />
      <HomeFAQ />

      {/* Final CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-primary opacity-90" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight max-w-4xl mx-auto leading-tight">
            Ready to Streamline Your China Sourcing Operations?
          </h2>
          <p className="text-primary-foreground/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Join hundreds of global buyers who trust SSourcing China for reliable, high-quality, and cost-effective procurement.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button size="xl" className="h-14 px-10 text-lg bg-white text-primary hover:bg-slate-100 shadow-xl shadow-black/10">
                Get a Free Sourcing Quote <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button size="xl" variant="outline" className="h-14 px-10 text-lg border-white text-white hover:bg-white/10">
                View How It Works
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Abstract background shapes */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </section>
    </div>
  );
};

export default Home;
