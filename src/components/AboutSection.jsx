import { Heart, Shield, Award, Home } from 'lucide-react';

const features = [
  {
    icon: Heart,
    title: 'Raised With Love',
    description: 'Our puppies are born and raised in our home, socialized with children and other animals from day one.',
  },
  {
    icon: Shield,
    title: 'Health Guaranteed',
    description: 'Every puppy comes with a full vet health certificate, up-to-date vaccinations, and a 2-year health guarantee.',
  },
  {
    icon: Award,
    title: 'Champion Bloodlines',
    description: 'We breed from AKC-registered parents with proven temperaments and excellent health histories.',
  },
  {
    icon: Home,
    title: 'Lifetime Support',
    description: 'We stay in touch after adoption. Our team is always available to answer questions about your new pup.',
  },
];

const AboutSection = () => (
  <section id="about" className="py-20 px-4 sm:px-6 bg-white">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <span className="inline-block bg-amber-100 text-amber-800 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
          Why Choose Us
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-3">Our Promise To You</h2>
        <p className="text-stone-600 max-w-xl mx-auto">
          We're not just breeders — we're dog lovers who care deeply about every puppy we place and every family we work with.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon: Icon, title, description }) => (
          <div key={title} className="flex flex-col items-center text-center p-6 rounded-2xl bg-stone-50 border border-stone-200">
            <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-4">
              <Icon className="w-7 h-7 text-amber-700" />
            </div>
            <h3 className="text-base font-bold text-stone-900 mb-2">{title}</h3>
            <p className="text-sm text-stone-600 leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
