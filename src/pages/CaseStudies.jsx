import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { caseStudies } from '@/data/content';

const caseStudyImages = {
  'electronics-wholesale': 'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_800/unsplashcom/photo-1606741965421-5b646fc6c1eb',
  'apparel-brand': 'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_800/unsplashcom/photo-1558618666-fcd25c85f82e',
  'industrial-parts': 'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_800/unsplashcom/photo-1581092921461-39b9c1f7e1d7',
};

function CaseStudyCard({ cs }) {
  return (
    <div className="bg-white rounded-xl border border-ss-border overflow-hidden hover:shadow-md transition-shadow">
      <div className="h-52 bg-gray-100 relative overflow-hidden">
        <img
          src={caseStudyImages[cs.id] || 'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_800/unsplashcom/photo-1606741965421-5b646fc6c1eb'}
          alt={cs.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <span className="inline-block px-2.5 py-0.5 bg-blue-50 text-ss-blue text-xs font-medium rounded-full mb-3">
          {cs.category}
        </span>
        <h3 className="text-lg font-semibold text-ss-text mb-2">
          {cs.title}
        </h3>
        <p className="text-xs text-ss-muted mb-4">{cs.client}</p>

        <div className="space-y-3 mb-4">
          <div>
            <p className="text-xs font-semibold text-ss-text uppercase tracking-wider mb-1">Challenge</p>
            <p className="text-sm text-ss-body leading-relaxed">{cs.challenge}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-ss-text uppercase tracking-wider mb-1">Solution</p>
            <p className="text-sm text-ss-body leading-relaxed">{cs.solution}</p>
          </div>
          <div className="flex items-start">
            <CheckCircle2 className="w-4 h-4 text-ss-success mt-0.5 mr-2 shrink-0" />
            <p className="text-sm text-ss-body leading-relaxed">{cs.result}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CaseStudies() {
  const location = useLocation();

  // Handle hash scroll
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace('#', ''));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, [location.hash]);

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-ss-blue-dark via-ss-blue to-ss-blue-light py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Case Studies
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Real results from real partnerships. See how we have helped businesses source successfully from China.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((cs) => (
              <div key={cs.id} id={cs.id}>
                <CaseStudyCard cs={cs} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-16 bg-ss-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-ss-blue mb-1">500+</p>
              <p className="text-sm text-ss-body">Suppliers Vetted</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-ss-blue mb-1">30+</p>
              <p className="text-sm text-ss-body">Countries Served</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-ss-blue mb-1">98%</p>
              <p className="text-sm text-ss-body">On-Time Delivery</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-ss-blue mb-1">95%</p>
              <p className="text-sm text-ss-body">Client Retention</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-ss-text tracking-tight mb-4">
            Let Us Help You Succeed
          </h2>
          <p className="text-lg text-ss-body max-w-2xl mx-auto mb-8">
            Every client&apos;s situation is unique. Tell us about your sourcing needs and we will show you how we can deliver results.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3.5 bg-ss-orange text-white text-base font-semibold rounded-lg hover:bg-ss-orange-light transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}