import strings from '@/strings.en.js';
import { featuredGenerators } from '@/data/generators.js';

export default function FeaturedGenerators() {
  return (
    <section className="py-[40px]">
      <div className="section-container">
        <h2 className="font-heading font-bold uppercase text-[26px] md:text-[30px] text-heading leading-[1.2] mb-[5px]">
          {strings.featuredHeading}
        </h2>
        <p className="text-body text-[14px] mb-[20px]">
          {strings.featuredSub}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {featuredGenerators.map((gen) => (
            <a
              key={gen.slug}
              href={`/generators/${gen.slug}`}
              className="card flex flex-col gap-[10px] group"
            >
              <span className="tag self-start">{gen.category}</span>
              <h3 className="font-heading font-bold uppercase text-[16px] text-heading-dark leading-[1.2]">
                {gen.name}
              </h3>
              <p className="text-body text-[14px] leading-[1.5]">
                {gen.desc}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}