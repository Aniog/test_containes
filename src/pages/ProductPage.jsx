import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import ProductGallery from '../components/product/ProductGallery';
import ProductInfo from '../components/product/ProductInfo';
import ProductAccordions from '../components/product/ProductAccordions';
import RelatedProducts from '../components/product/RelatedProducts';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="serif-heading text-4xl mb-4">Product Not Found</h1>
          <button onClick={() => navigate('/shop')} className="btn-outline">
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="pt-20 md:pt-24">
      <div className="container-wide py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <ProductGallery images={product.images} productName={product.name} />
          <ProductInfo product={product} />
        </div>
        <ProductAccordions />
      </div>
      <RelatedProducts currentProductId={product.id} />
    </main>
  );
};

export default ProductPage;
