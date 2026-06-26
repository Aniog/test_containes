import { Link } from 'react-router-dom';
import { Search, ShieldCheck, ClipboardCheck, CalendarCheck, Ship, FileText, ArrowRight, CheckCircle2 } from 'lucide-react';
import { services } from '@/data/content';

const iconMap = { Search, ShieldCheck, ClipboardCheck, CalendarCheck, Ship };

const serviceImages = {
  'supplier-sourcing': 'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_800/unsplashcom/photo-1454165804606-c3d57bc86b40',
  'factory-verification': 'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_800/unsplashcom/photo-1589792923942-b8516cd4891d',
  'quality-inspection': 'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_800/unsplashcom/photo-1573757056004-065ad36e2cf4',
  'production-follow-up': 'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_800/unsplashcom/photo-1497366757902-55dc0b3a87f0',
  'shipping-coordination': 'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_800/unsplashcom/photo-1578575437130-527eed3abbec',
};

export default function Services() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-ss-blue-dark via-ss-blue to-ss-blue-light py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Our Services
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Comprehensive China sourcing services designed to minimize risk, ensure quality, and streamline your supply chain.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || FileText;
            const isReversed = index % 2 === 1;

            return (
              <div
                key={service.id}
                className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="rounded-xl overflow-hidden bg-gray-100 border border-ss-border">
                    <img
                      src={serviceImages[service.id] || serviceImages['supplier-sourcing']}
                      alt={service.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-ss-blue" />
                  </div>
                  <h2 id={`service-title-${service.id}`} className="text-2xl md:text-3xl font-bold text-ss-text tracking-tight mb-3">
                    {service.title}
                  </h2>
                  <p id={`service-desc-${service.id}`} className="text-base text-ss-body leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start text-sm text-ss-body">
                        <CheckCircle2 className="w-4 h-4 text-ss-success mt-0.5 mr-3 shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-6 py-3 bg-ss-orange text-white text-sm font-semibold rounded-lg hover:bg-ss-orange-light transition-colors"
                  >
                    Inquire About This Service <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-ss-blue-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white tracking-tight mb-4">
            Ready to Start Sourcing?
          </h2>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto mb-8">
            Contact us today for a free consultation. Tell us what you need and we will build a custom sourcing plan.
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