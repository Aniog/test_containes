import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 'home-kitchen',
    title: 'Home & Kitchen',
    desc: 'Cookware, organizers, small appliances, decor and seasonal goods.',
    imgId: 'product-home-kitchen-3a8d11',
  },
  {
    id: 'consumer-electronics',
    title: 'Consumer Electronics',
    desc: 'Accessories, chargers, audio, smart devices and OEM-friendly products.',
    imgId: 'product-electronics-7c19f4',
  },
  {
    id: 'apparel-textiles',
    title: 'Apparel & Textiles',
    desc: 'Cut-and-sew apparel, knitwear, bags, hats and home textiles.',
    imgId: 'product-apparel-2b54aa',
  },
  {
    id: 'beauty-personal-care',
    title: 'Beauty & Personal Care',
    desc: 'Brushes, mirrors, accessories, packaging and OEM cosmetic supplies.',
    imgId: 'product-beauty-9e2417',
  },
  {
    id: 'industrial-hardware',
    title: 'Industrial & Hardware',
    desc: 'Tools, fasteners, fittings, machinery parts and metal components.',
    imgId: 'product-industrial-4d76cc',
  },
  {
    id: 'promotional-gifts',
    title: 'Promotional & Gifts',
    desc: 'Branded merchandise, packaging, printing and giftware in custom designs.',
    imgId: 'product-promo-6f33d8',
  },
];

export default function HomeProducts() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Products we source
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Categories we work with every day
            </h2>
            <p className="mt-4 text-slate-600 text-lg">
              We mainly serve importers, wholesalers, e-commerce sellers and
              brands looking for reliable manufacturing in China.
            </p>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center text-sm font-semibold text-brand hover:text-brand-700"
          >
            View all categories
            <ArrowRight className="ml-1.5 h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article
              key={p.id}
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-card hover:shadow-md transition"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  alt={p.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                  data-strk-img-id={p.imgId}
                  data-strk-img={`[product-${p.id}-desc] [product-${p.id}-title] manufacturing factory china`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-6">
                <h3
                  id={`product-${p.id}-title`}
                  className="text-lg font-semibold text-slate-900"
                >
                  {p.title}
                </h3>
                <p
                  id={`product-${p.id}-desc`}
                  className="mt-2 text-sm text-slate-600 leading-relaxed"
                >
                  {p.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
