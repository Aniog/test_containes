import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { caseStudies } from '@/data/content';

const caseStudyImages = {
  'electronics-wholesale': 'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_600/unsplashcom/photo-1606741965421-5b646fc6c1eb',
  'apparel-brand': 'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_600/unsplashcom/photo-1558618666-fcd25c85f82e',
  'industrial-parts': 'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_600/unsplashcom/photo-1581092921461-39b9c1f7e1d7',
};

export default function CaseStudiesSection() {
  return (
    <section className="py-16 md:py-24 bg-ss-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-ss-text tracking-tight mb-4">
            Case Studies
          </h2>
          <p className="text-lg text-ss-body max-w-2xl mx-auto">
            Real results from real partnerships. See how we have helped businesses source successfully from China.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((cs) => (
            <div
              key={cs.id}
              className="bg-white rounded-xl border border-ss-border overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="h-48 bg-gray-100 relative overflow-hidden">
                <img
                  src={caseStudyImages[cs.id] || ''}
                  alt={cs.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-2.5 py-0.5 bg-blue-50 text-ss-blue text-xs font-medium rounded-full mb-3">
                  {cs.category}
                </span>
                <h3 className="text-lg font-semibold text-ss-text mb-1">
                  {cs.title}
                </h3>
                <p className="text-xs text-ss-muted mb-3">
                  {cs.client}
                </p>
                <div className="flex items-start mb-3">
                  <CheckCircle2 className="w-4 h-4 text-ss-success mt-0.5 mr-2 shrink-0" />
                  <p className="text-sm text-ss-body leading-relaxed">{cs.result}</p>
                </div>
                <Link
                  to={`/case-studies#${cs.id}`}
                  className="inline-flex items-center text-sm font-medium text-ss-blue hover:text-ss-blue-light transition-colors"
                >
                  Read full story <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center px-6 py-3 bg-ss-blue text-white text-sm font-semibold rounded-lg hover:bg-ss-blue-dark transition-colors"
          >
            View All Case Studies <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}