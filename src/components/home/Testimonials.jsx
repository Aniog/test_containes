import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const testimonials = [
  {
    id: 'test-1',
    name: 'Marcus Chen',
    role: 'Trail Rider, Colorado',
    quote: 'The Trail X1 completely changed how I ride. The suspension is buttery smooth and the geometry is spot on for aggressive descents.',
    rating: 5,
  },
  {
    id: 'test-2',
    name: 'Sofia Reyes',
    role: 'Road Cyclist, California',
    quote: 'I upgraded to the Aero R5 last season and shaved 8 minutes off my century time. The weight savings are real and the ride quality is incredible.',
    rating: 5,
  },
  {
    id: 'test-3',
    name: 'James Okafor',
    role: 'Gravel Adventurer, Oregon',
    quote: 'The Gravel G3 handles everything I throw at it — fire roads, singletrack, pavement. It\'s the most versatile bike I\'ve ever owned.',
    rating: 5,
  },
];

const Stars = ({ count }) => (
  <div className="flex gap-1 mb-4">
    {Array.from({ length: count }).map((_, i) => (
      <span key={i} className="text-[#e94560] text-lg">★</span>
    ))}
  </div>
);

const Testimonials = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="testimonials" ref={containerRef} className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#e94560] text-sm font-semibold uppercase tracking-widest">
            Rider Stories
          </span>
          <h2 id="testimonials-heading" className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            What Our Riders Say
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto text-lg">
            Real riders, real experiences. See why thousands choose Velox.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow"
            >
              <Stars count={t.rating} />
              <p className="text-gray-700 leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                  <img
                    alt={t.name}
                    className="w-full h-full object-cover"
                    data-strk-img-id={`avatar-${t.id}`}
                    data-strk-img={`[testimonial-role-${t.id}] [testimonial-name-${t.id}] portrait`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="80"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div>
                  <span id={`testimonial-name-${t.id}`} className="font-bold text-gray-900 block text-sm">
                    {t.name}
                  </span>
                  <span id={`testimonial-role-${t.id}`} className="text-gray-500 text-xs">
                    {t.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
