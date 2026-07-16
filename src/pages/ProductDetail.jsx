import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/ui/Navigation';
import Footer from '../components/ui/Footer';
import CartDrawer from '../components/ui/CartDrawer';
import ImageGallery from '../components/product/ImageGallery';
import ProductInfo from '../components/product/ProductInfo';
import Accordion from '../components/product/Accordion';
import RelatedProducts from '../components/product/RelatedProducts';
import { getProductBySlug } from '../data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#F8F5F1]">
        <Navigation />
        <div className="pt-20 max-w-4xl mx-auto px-6 py-20 text-center">
          <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
          <p className="text-[#5C4E42] mb-8">The piece you're looking for doesn't exist or has been moved.</p>
          <Link to="/shop" className="btn btn-primary">BROWSE COLLECTION</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-[#F8F5F1]">
      <Navigation />

      <div className="pt-20">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-6 py-6 text-xs tracking-wider text-[#8C7660]">
          <Link to="/" className="hover:text-[#1C1917]">HOME</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-[#1C1917]">SHOP</Link>
          <span className="mx-2">/</span>
          <span>{product.name}</span>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 pb-16">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
            {/* Left: Gallery */}
            <div>
              <ImageGallery product={product} />
            </div>

            {/* Right: Info */}
            <div className="pt-2">
              <ProductInfo product={product} />

              {/* Accordions */}
              <div className="mt-10">
                <Accordion title="DESCRIPTION" defaultOpen>
                  <p>{product.longDescription}</p>
                  <p className="mt-3">Each piece is hand-finished in our studio and comes with a lifetime guarantee against manufacturing defects.</p>
                </Accordion>

                <Accordion title="MATERIALS & CARE">
                  <ul className="space-y-1.5">
                    <li>• 18K gold plating over sterling silver base</li>
                    <li>• Hypoallergenic and nickel-free</li>
                    <li>• Avoid contact with perfumes, lotions, and harsh chemicals</li>
                    <li>• Store in the provided pouch when not in use</li>
                    <li>• Gently polish with a soft cloth to maintain shine</li>
                  </ul>
                </Accordion>

                <Accordion title="SHIPPING & RETURNS">
                  <p className="mb-2">Free worldwide shipping on all orders. Delivery in 3–7 business days.</p>
                  <p>30-day returns for unworn items in original packaging. Contact us to initiate a return.</p>
                </Accordion>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="border-t border-[#E5DDD1]">
          <RelatedProducts currentProductId={product.id} />
        </div>
      </div>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default ProductDetail;
