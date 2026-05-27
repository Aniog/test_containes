import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Yoga Instructor',
    avatar: '👩‍🦰',
    rating: 5,
    quote:
      'NutriLife completely changed how I think about food. The meal plans are practical, delicious, and I have more energy than ever before!',
  },
  {
    name: 'James T.',
    role: 'Software Engineer',
    avatar: '👨‍💻',
    rating: 5,
    quote:
      'I lost 12 pounds in 3 months just by following the nutrition tips here. No crash diets — just real, sustainable changes to my eating habits.',
  },
  {
    name: 'Priya K.',
    role: 'Registered Nurse',
    avatar: '👩‍⚕️',
    rating: 5,
    quote:
      'As a healthcare professional, I appreciate how evidence-based the content is. I recommend NutriLife to my patients regularly.',
  },
];

const Testimonials = () => (
  <section id="testimonials" className="py-20 bg-[#e8f5ee]">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14">
        <span className="text-[#2d7a4f] text-sm font-semibold uppercase tracking-widest">Real Stories</span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
          What Our Community Says
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto text-base leading-relaxed">
          Thousands of people have transformed their health with NutriLife. Here are a few of their stories.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#e8f5ee] rounded-full flex items-center justify-center text-xl">
                {t.avatar}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                <p className="text-xs text-gray-500">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
