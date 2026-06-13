import strings from '../../data/strings';
import { featuredGenerators } from '../../data/generators';

const FeaturedGenerators = () => {
  const { featured } = strings.en;

  return (
    <section className="py-10 md:py-[40px]">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-10">
          <h2 className="font-heading uppercase text-h2-mobile md:text-h2-desktop text-heading m-0 mb-3">
            {featured.heading}
          </h2>
          <p className="text-body text-body max-w-[480px] mx-auto">
            {featured.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredGenerators.map((gen) => (
            <a
              key={gen.slug}
              href={`/generators/${gen.slug}`}
              className="group block bg-white border border-border rounded-card p-5 no-underline hover:border-brand-purple hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-heading font-bold text-base text-heading uppercase m-0 leading-snug">
                  {gen.name}
                </h3>
                <span className="inline-block text-[11px] font-heading font-bold uppercase text-brand-purple border border-brand-purple rounded-card px-1.5 py-0.5 whitespace-nowrap ml-3">
                  {gen.category}
                </span>
              </div>
              <p className="text-sm text-body m-0 leading-relaxed">
                {gen.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGenerators;
