import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icons';
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

export default function ProductsSection() {
  return (
    <section id="products" className="section">
      <div className="container-x">
        <SectionHeader
          eyebrow="Categories"
          title="Products we source, across 12+ main categories"
          subtitle="If your product is made in China, we can almost certainly find a vetted factory for it. Here are the categories we handle most often."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {productCategories.map((p) => {
            const IconCmp = iconMap[p.icon] || Icon.Package;
            return (
              <div
                key={p.id}
                className="card p-5 flex items-start gap-3.5 group"
              >
                <div className="w-10 h-10 rounded-md bg-[#F8F9FB] group-hover:bg-[#0B2545] group-hover:text-white text-[#0B2545] flex items-center justify-center flex-shrink-0 transition-colors">
                  <IconCmp className="w-5 h-5" strokeWidth={1.8} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-[15px] font-bold text-[#1A2230] leading-snug">{p.name}</h3>
                  <p className="text-xs text-[#6B7A90] mt-1 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Button to="/products" variant="secondary" size="md" showArrow>
            Browse all sourcing categories
          </Button>
        </div>
      </div>
    </section>
  );
}
