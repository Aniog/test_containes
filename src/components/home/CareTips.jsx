import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CheckCircle } from 'lucide-react';

const TIPS = [
  {
    number: '01',
    title: 'Balanced Nutrition',
    description: 'Feed your dog high-quality food appropriate for their age, size, and activity level. Fresh water should always be available.',
    checks: ['Age-appropriate diet', 'Avoid toxic foods', 'Consistent meal times'],
  },
  {
    number: '02',
    title: 'Regular Exercise',
    description: 'Daily walks and playtime keep your dog physically fit and mentally stimulated. Exercise needs vary greatly by breed.',
    checks: ['Daily walks', 'Off-leash play', 'Mental enrichment toys'],
  },
  {
    number: '03',
    title: 'Vet Check-Ups',
    description: 'Annual wellness exams catch health issues early. Keep vaccinations, flea, tick, and heartworm prevention up to date.',
    checks: ['Annual exams', 'Vaccinations', 'Dental cleanings'],
  },
  {
    number: '04',
    title: 'Grooming & Hygiene',
    description: 'Regular brushing, nail trims, and baths keep your dog comfortable and healthy. Ear and eye checks prevent infections.',
    checks: ['Weekly brushing', 'Monthly nail trims', 'Ear cleaning'],
  },
];

const CareTips = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="care" ref={containerRef} className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-amber-100 text-amber-700 text-sm font-semibold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">
            Dog Care
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">Keeping Your Dog Happy & Healthy</h2>
          <p className="text-stone-600 max-w-xl mx-auto leading-relaxed">
            A well-cared-for dog is a happy dog. Follow these essential tips to give your companion the best life possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {TIPS.map((tip) => (
            <div key={tip.number} className="flex gap-5 bg-stone-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-500 text-white rounded-xl flex items-center justify-center font-bold text-sm">
                {tip.number}
              </div>
              <div>
                <h3 className="text-lg font-bold text-stone-900 mb-2">{tip.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-4">{tip.description}</p>
                <ul className="flex flex-col gap-1">
                  {tip.checks.map((check) => (
                    <li key={check} className="flex items-center gap-2 text-sm text-stone-700">
                      <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                      {check}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="relative rounded-3xl overflow-hidden">
          <div
            className="absolute inset-0"
            data-strk-bg-id="care-cta-bg-m3n4"
            data-strk-bg="[care-cta-sub] [care-cta-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1200"
          />
          <div className="absolute inset-0 bg-stone-900/70" />
          <div className="relative z-10 py-16 px-8 md:px-16 text-center">
            <h3 id="care-cta-title" className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Adopt?
            </h3>
            <p id="care-cta-sub" className="text-stone-200 text-lg mb-8 max-w-lg mx-auto">
              Millions of dogs are waiting for a loving home. Visit your local shelter and change a life today.
            </p>
            <a
              href="#"
              className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold px-10 py-4 rounded-full transition-colors no-underline text-lg"
            >
              Find a Shelter Near You
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareTips;
