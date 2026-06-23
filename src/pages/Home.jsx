import React from 'react';
import HomeHero from '@/components/home/HomeHero';
import HomeServices from '@/components/home/HomeServices';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HomeHero />

      {/* Trust Points */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Why Global Buyers Choose <span className="text-primary">SSourcing China</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 font-medium">
                Procurement from China doesn't have to be risky or complicated. We provide the localized expertise you need to succeed.
              </p>
              
              <div className="space-y-4">
                {[
                  "On-the-ground presence in Shenzhen, Guangzhou, and Ningbo.",
                  "Transparent communication with no hidden commissions.",
                  "Strict quality inspection protocols and detailed reporting.",
                  "Local industry knowledge to negotiate better prices and terms.",
                  "Comprehensive IP protection and contract verification."
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">{point}</span>
                  </div>
                ))}
              </div>
              
              <Button asChild className="mt-10" size="lg">
                <Link to="/how-it-works">Learn Our Process</Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="bg-slate-100 rounded-2xl p-8 shadow-2xl border border-slate-200">
                <blockquote className="text-xl italic text-slate-700 mb-6 font-medium">
                  "SSourcing China transformed our supply chain. Before working with them, we struggled with quality issues and shipping delays. Now, everything runs like clockwork, and our margins have improved by 15%."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-300 rounded-full" />
                  <div>
                    <div className="font-bold text-slate-900">David Miller</div>
                    <div className="text-sm text-slate-500 font-medium">CEO, TechCore Distributing (USA)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HomeServices />

      {/* Categories Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Industries We Serve</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
              Our team has deep expertise across a wide range of product categories.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Consumer Electronics", "Home & Furniture", "Industrial Machinery", 
              "Apparel & Textiles", "Building Materials", "Auto Parts", 
              "Toys & Gifts", "Kitchenware"
            ].map((cat) => (
              <div key={cat} className="p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors text-center border border-slate-200 shadow-sm">
                <span className="font-bold text-slate-800">{cat}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link to="/products">View All Product Categories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Scale Your Production?</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 font-medium">
            Contact us today for a free consultation and customized sourcing quote. Let's find your perfect supplier in China.
          </p>
          <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold px-10 text-lg" asChild>
            <Link to="/contact">Contact Our Team Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
