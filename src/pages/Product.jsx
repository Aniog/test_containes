import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { getProductById } from '@/data/products';
import ImageGallery from '@/components/product/ImageGallery';
import ProductInfo from '@/components/product/ProductInfo';
import Accordion from '@/components/product/Accordion';
import RelatedProducts from '@/components/product/RelatedProducts';

export default function Product() {
  const { id } = useParams();
  const product = getProductById(id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  if (!product) {
    return (
      <div className="mx-auto max-w-[800px] px-6 py-32 md:py-40 text-center">
        <p className="eyebrow mb-4">Not found</p>
        <h1 className="font-serif text-3xl md:text-4xl text-ink mb-6">
          We couldn't find that piece
        </h1>
        <Link to="/shop" className="btn-primary">Return to shop</Link>
      </div>
    );
  }

  const accordionItems = [
    {
      title: 'Description',
      content: (
        <div className="space-y-4">
          <p>{product.description}</p>
          <ul className="space-y-2">
            {product.details.map((d, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="block w-1 h-1 rounded-full bg-gold mt-2 flex-shrink-0" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      title: 'Materials & Care',
      content: (
        <div className="space-y-4">
          <p>{product.materials}</p>
          <ul className="space-y-2">
            {product.care.map((c, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="block w-1 h-1 rounded-full bg-gold mt-2 flex-shrink-0" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      title: 'Shipping & Returns',
      content: (
        <p>{product.shipping}</p>
      ),
    },
  ];

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-cream pt-28 md:pt-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted tracking-[0.1em] uppercase">
            <Link to="/" className="hover:text-ink transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" strokeWidth={1.5} />
            <Link to="/shop" className="hover:text-ink transition-colors">Shop</Link>
            <ChevronRight className="w-3 h-3" strokeWidth={1.5} />
            <span className="text-charcoal truncate">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Main PDP */}
      <section className="bg-cream py-10 md:py-14 lg:py-16">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-7">
              <ImageGallery product={product} />
            </div>
            <div className="lg:col-span-5">
              <ProductInfo product={product} />
            </div>
          </div>
        </div>
      </section>

      {/* Accordions */}
      <section className="bg-cream pb-16 md:pb-24">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="max-w-3xl mx-auto">
            <Accordion items={accordionItems} defaultOpen={0} />
          </div>
        </div>
      </section>

      <RelatedProducts product={product} />
    </>
  );
}