import PageHero from '@/components/shared/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import Icon from '@/components/ui/Icons';
import InquiryForm from '@/components/shared/InquiryForm';
import CtaBanner from '@/components/shared/CtaBanner';
import { productCategories } from '@/data/content';

const iconMap = {
  cpu: Icon.Cpu,
  'chef-hat': Icon.ChefHat,
  shirt: Icon.Shirt,
  sparkles: Icon.Sparkles,
  bike: Icon.Bike,
  wrench: Icon.Wrench,
  puzzle: Icon.Puzzle,
  lamp: Icon.Lamp,
  'package-2': Icon.Package2,
  factory: Icon.Factory,
  'paw-print': Icon.PawPrint,
  car: Icon.Car,
};

export default function Products() {
  return (
    <>
      <PageHero
        eyebrow="Products we source"
        title="12+ product categories we actively source from China"
        subtitle="We focus on the categories where our supplier network and QC experience are strongest. Don't see your product below? Just ask — we can still help."
        bgId="products-bg-7e9a1c"
        bgQuery="[products-hero-subtitle] [products-hero-title]"
      >
        <span id="products-hero-title" className="sr-only">Sourcing categories</span>
        <span id="products-hero-subtitle" className="sr-only">Consumer electronics, apparel, home goods</span>
      </PageHero>

      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Categories"
            title="Where we have the deepest supplier coverage"
            subtitle="In each category below, we maintain a shortlist of 5–15 audited factories. That means faster quotes, better samples, and more competitive pricing on repeat orders."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {productCategories.map((p) => {
              const IconCmp = iconMap[p.icon] || Icon.Package;
              return (
                <div key={p.id} className="card p-6 flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-md bg-[#F8F9FB] group-hover:bg-[#0B2545] group-hover:text-white text-[#0B2545] flex items-center justify-center flex-shrink-0 transition-colors">
                    <IconCmp className="w-6 h-6" strokeWidth={1.8} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[16px] font-bold text-[#1A2230] leading-snug">{p.name}</h3>
                    <p className="text-sm text-[#3D4A5C] mt-1.5 leading-relaxed">{p.desc}</p>
                    {p.examples && (
                      <p className="text-xs text-[#6B7A90] mt-2.5">
                        <span className="font-semibold text-[#3D4A5C]">Examples: </span>
                        {p.examples}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <SectionHeader
                align="left"
                eyebrow="Not on this list?"
                title="We source hundreds of niche products every year"
                subtitle="If your product is made in China, we almost certainly have a route to it. Tell us what you have in mind, and we'll come back with a quick feasibility note."
              />
              <div className="mt-6 grid grid-cols-2 gap-3">
                {['Hardware & tools', 'Sports & outdoor', 'Beauty packaging', 'Industrial parts', 'Pet products', 'Stationery', 'Lighting', 'Toys & games'].map((t, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-[#3D4A5C]">
                    <Icon.CheckCircle2 className="w-4 h-4 text-[#1E8E5A] flex-shrink-0" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="card p-6 md:p-8">
                <InquiryForm idPrefix="products-inquiry" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Have a specific product in mind?"
        subtitle="Send us the spec, link, or sample photo. We'll come back with factory options, sample cost, and lead time."
      />
    </>
  );
}
