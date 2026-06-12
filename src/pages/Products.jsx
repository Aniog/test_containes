import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import PageHeader from '../components/shared/PageHeader';

const categories = [
  {
    id: 'home-kitchen',
    title: 'Home & Kitchen',
    desc: 'Cookware, kitchen tools, storage and organization, home decor, seasonal goods, pet supplies.',
    examples: ['Cookware sets', 'Storage boxes', 'Decor & lighting', 'Pet accessories'],
    imgId: 'cat-home-kitchen-1f8a23',
  },
  {
    id: 'consumer-electronics',
    title: 'Consumer Electronics',
    desc: 'Mobile accessories, audio, charging, smart home, IoT devices and OEM-friendly products.',
    examples: ['Cables & chargers', 'Bluetooth audio', 'Smart plugs', 'Wearables'],
    imgId: 'cat-electronics-7b2911',
  },
  {
    id: 'apparel-textiles',
    title: 'Apparel & Textiles',
    desc: 'Cut-and-sew apparel, knitwear, sports and outdoor wear, bags, hats, home textiles.',
    examples: ['T-shirts & polos', 'Hoodies', 'Backpacks', 'Bedding'],
    imgId: 'cat-apparel-3d4f99',
  },
  {
    id: 'beauty-personal-care',
    title: 'Beauty & Personal Care',
    desc: 'Brushes, mirrors, accessories, packaging, OEM cosmetic supplies and skincare components.',
    examples: ['Makeup brushes', 'Cosmetic packaging', 'Hair tools', 'Personal care'],
    imgId: 'cat-beauty-9c33aa',
  },
  {
    id: 'industrial-hardware',
    title: 'Industrial & Hardware',
    desc: 'Tools, fasteners, fittings, machinery parts, metal components, plumbing and electrical hardware.',
    examples: ['Hand tools', 'Stainless fittings', 'CNC parts', 'Industrial fasteners'],
    imgId: 'cat-industrial-2e72bd',
  },
  {
    id: 'promotional-gifts',
    title: 'Promotional Products & Gifts',
    desc: 'Branded merchandise, packaging, printing, giftware in custom designs and small MOQs.',
    examples: ['Branded mugs', 'Tote bags', 'Notebooks', 'Custom packaging'],
    imgId: 'cat-promo-5a16ee',
  },
  {
    id: 'sports-outdoor',
    title: 'Sports & Outdoor',
    desc: 'Fitness gear, camping, cycling accessories, outdoor furniture and travel goods.',
    examples: ['Yoga mats', 'Camping chairs', 'Bike accessories', 'Travel bags'],
    imgId: 'cat-sports-7f44d2',
  },
  {
    id: 'baby-toys',
    title: 'Baby & Toys',
    desc: 'Educational toys, plush, baby essentials, kids furniture and outdoor play (with compliance focus).',
    examples: ['Educational toys', 'Plush toys', 'Strollers & feeding', 'Kids furniture'],
    imgId: 'cat-baby-9d51ba',
  },
  {
    id: 'office-stationery',
    title: 'Office & Stationery',
    desc: 'Desk supplies, organizers, custom notebooks, packaging and small office equipment.',
    examples: ['Notebooks', 'Pens & desk sets', 'Folders', 'Office storage'],
    imgId: 'cat-office-3b62e7',
  },
];

export default function Products() {
  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <PageHeader
        eyebrow="Products We Source"
        title="Categories we work with every day"
        description="We mainly serve importers, wholesalers, e-commerce sellers and brands that buy in mid-volume quantities. If your product fits one of these categories, we likely already know suitable factories."
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <article
                key={c.id}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-card"
              >
                <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    alt={c.title}
                    className="h-full w-full object-cover"
                    data-strk-img-id={c.imgId}
                    data-strk-img={`[cat-${c.id}-desc] [cat-${c.id}-title] manufacturing factory china`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-6">
                  <h3
                    id={`cat-${c.id}-title`}
                    className="text-lg font-semibold text-slate-900"
                  >
                    {c.title}
                  </h3>
                  <p
                    id={`cat-${c.id}-desc`}
                    className="mt-2 text-sm text-slate-600 leading-relaxed"
                  >
                    {c.desc}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {c.examples.map((e) => (
                      <li
                        key={e}
                        className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
                      >
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-slate-200 bg-slate-50 p-8 md:p-10">
            <div className="grid lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8">
                <h3 className="text-2xl font-bold text-slate-900">
                  Don&apos;t see your category?
                </h3>
                <p className="mt-2 text-slate-600">
                  We work across many other product types. Send us your product
                  brief and we&apos;ll tell you honestly whether China is the
                  right place to manufacture it and whether we can help.
                </p>
              </div>
              <div className="lg:col-span-4 lg:text-right">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-accent/90"
                >
                  Ask about your product
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
