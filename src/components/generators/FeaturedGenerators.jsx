import strings from '@/data/strings';
import { featuredGenerators } from '@/data/generators';

const s = strings.en.featured;

export default function FeaturedGenerators() {
  return (
    <section className="bg-white py-10 md:py-[40px]">
      <div className="max-w-content mx-auto px-5">
        <div className="text-center mb-8">
          <h2 className="font-heading font-bold uppercase text-[24px] md:text-[30px] text-text-heading leading-[1.2] m-0 mb-2">
            {s.heading}
          </h2>
          <p className="text-text-body text-[15px] m-0">{s.subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredGenerators.map((gen) => (
            <a
              key={gen.slug}
              href={`/generators/${gen.slug}`}
              className="group block bg-white border border-card-border rounded-card p-5 hover:border-brand-purple hover:shadow-[0_2px_12px_rgba(129,89,187,0.1)] transition-all"
            >
              <h3 className="font-heading font-bold text-[16px] text-text-heading uppercase m-0 mb-1 leading-snug group-hover:text-brand-purple transition-colors">
                {gen.name}
              </h3>
              <p className="text-text-body text-[14px] m-0 mb-3 leading-relaxed">
                {gen.description}
              </p>
              <span className="inline-block font-heading text-[11px] uppercase font-bold text-brand-purple border border-brand-purple rounded-[3px] px-[6px] py-[2px] leading-tight">
                {gen.category}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
