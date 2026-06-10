import Button from '@/components/ui/Button';

export default function CtaBanner({ title, subtitle, primaryTo = '/contact', primaryLabel = 'Get a Free Sourcing Quote' }) {
  return (
    <section className="bg-[#0B2545] text-white">
      <div className="container-x py-14 md:py-16">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <h3 className="text-2xl md:text-3xl font-bold leading-snug">{title}</h3>
            {subtitle && <p className="mt-2 text-[#C7D6EE] text-base md:text-lg max-w-2xl">{subtitle}</p>}
          </div>
          <div className="lg:col-span-1 lg:text-right">
            <Button to={primaryTo} variant="primary" size="lg" showArrow>
              {primaryLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
