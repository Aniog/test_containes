import strings from '@/data/strings';
import { categories } from '@/data/generators';
import { CategoryIcon, ArrowRight } from './Icons';

const s = strings.en.browseByCategory;

export default function BrowseByCategory() {
  return (
    <section className="bg-light-bg py-10 md:py-[40px]">
      <div className="max-w-content mx-auto px-5">
        <h2 className="font-heading font-bold uppercase text-[24px] md:text-[30px] text-text-heading leading-[1.2] m-0 mb-8 text-center">
          {s.heading}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`/generators#${cat.id}`}
              className="group flex items-start gap-4 bg-white border border-card-border rounded-card p-5 hover:border-brand-purple hover:shadow-[0_2px_12px_rgba(129,89,187,0.1)] transition-all"
            >
              <div className="shrink-0 w-[48px] h-[48px] flex items-center justify-center">
                <CategoryIcon categoryId={cat.id} className="w-[48px] h-[48px]" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-heading font-bold text-[14px] uppercase text-text-heading m-0 mb-1 leading-snug group-hover:text-brand-purple transition-colors">
                  {cat.name}
                </h3>
                <p className="text-text-body text-[13px] m-0 leading-relaxed">
                  {cat.description}
                </p>
              </div>
              <ArrowRight className="shrink-0 text-card-border group-hover:text-brand-purple transition-colors mt-1" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
