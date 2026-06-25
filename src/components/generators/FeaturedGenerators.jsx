import { strings, featuredGenerators } from '@/data/strings';

const t = strings.en.featured;

const FeaturedGenerators = () => {
  return (
    <section className="py-10 bg-light-bg">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="font-heading font-bold uppercase text-heading-section text-[26px] md:text-[30px] leading-[1.2] mb-2">{t.heading}</h2>
        <p className="text-body-text mb-8">{t.sub}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredGenerators.map((gen) => (
            <a
              key={gen.slug}
              href={`/generators/${gen.slug}`}
              className="block bg-white border border-card-border rounded p-5 no-underline hover:shadow-md hover:border-brand-purple transition-all"
            >
              <span className="inline-block text-[11px] font-heading font-bold uppercase text-brand-purple border border-brand-purple rounded px-[6px] py-[2px] mb-3">
                {gen.category}
              </span>
              <h3 className="font-heading font-bold uppercase text-heading-section text-base mb-2 leading-tight">{gen.name}</h3>
              <p className="text-body-text text-sm m-0">{gen.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGenerators;
