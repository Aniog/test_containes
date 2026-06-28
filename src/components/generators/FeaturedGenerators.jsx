import strings from '@/data/strings.en';
import { featuredGenerators } from '@/data/generators';

export default function FeaturedGenerators() {
  const s = strings.featured;
  return (
    <section className="w-full bg-white py-[40px]">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2
          className="text-[26px] md:text-[32px] mb-[5px]"
          style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', color: '#4B5056' }}
        >
          {s.heading}
        </h2>
        <p className="text-[14px] mb-[20px]" style={{ color: '#636972' }}>{s.subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {featuredGenerators.map((gen) => (
            <a
              key={gen.slug}
              href={`/generators/${gen.slug}`}
              className="gen-card block no-underline"
            >
              <h3
                className="text-[15px] mb-[5px]"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', color: '#2E2E2F' }}
              >
                {gen.name}
              </h3>
              <p className="text-[13px] mb-[10px]" style={{ color: '#636972' }}>{gen.description}</p>
              <span className="ghost-tag">{gen.category}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
