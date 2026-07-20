import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section id="about" className="section-padding bg-surface">
      <div className="container-wide mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
              alt="Velmora artisan jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <span className="text-accent text-xs font-medium tracking-wider uppercase mb-4">Our Story</span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-text-primary leading-snug mb-6">
              Jewelry should feel like an extension of you — effortless, warm, and always within reach.
            </h2>
            <p className="text-text-secondary text-sm leading-relaxed mb-4">
              Velmora was born from a simple belief: beautiful jewelry shouldn't require a second mortgage. We craft demi-fine pieces in 18K gold plating that look and feel luxurious, without the luxury price tag.
            </p>
            <p className="text-text-secondary text-sm leading-relaxed mb-8">
              Every piece is designed to be worn every day — to work, to dinner, to life. Hypoallergenic, tarnish-resistant, and made to last. Because you deserve jewelry that works as hard as you do.
            </p>
            <Link to="#" className="btn-outline text-sm self-start">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
