import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { getProductById } from '@/data/products';
import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
import RelatedProducts from '@/components/product/RelatedProducts';

const ProductPage = () => {
  const { id } = useParams();
  const product = getProductById(id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-velmora-ink mb-4">
            Product Not Found
          </h1>
          <Link
            to="/shop"
            className="text-sm text-velmora-gold hover:underline"
          >
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 lg:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-6">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-velmora-taupe hover:text-velmora-gold transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Shop
        </Link>
      </div>

      {/* Product */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
          <ProductGallery product={product} />
          <div className="lg:pt-8">
            <ProductInfo product={product} />
          </div>
        </div>
      </div>

      <RelatedProducts currentId={product.id} />
    </div>
  );
};

export default ProductPage;
