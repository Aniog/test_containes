import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary to-blue-800 text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <MessageSquare className="w-12 h-12 mx-auto mb-6 text-blue-200" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Source from China?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Tell us what you need and receive a free, no-obligation sourcing quote within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-blue-50 px-8 py-6 text-base">
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-base">
                Learn About Our Process
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
