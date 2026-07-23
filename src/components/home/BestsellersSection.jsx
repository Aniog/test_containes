import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';
import { toast } from 'sonner';

export default function BestsellersSection() {
  const containerRef = useRef(null);
  const [addedProduct, setAddedProduct] = useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleQuickAdd = (product) => {
    setAddedProduct(product.id);
    toast.success(`${product.name} added to cart`);
    setTimeout(() => setAddedProduct(null), 2000);
  };

  return (
    <section ref={containerRef} className="section-padding bg-[#FAF9F7]">
      <div className="container-velmora">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[#6B6560] mb-3">Most Loved</p>
          <h2 className="section-title">Bestsellers</h2>
          <div className="w-12 h-px bg-[#C9A96E] mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onQuickAdd={handleQuickAdd} />
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <a href="/shop" className="btn-outline">
            View All Pieces
          </a>
        </div>
      </div>
    </section>
  );
}
