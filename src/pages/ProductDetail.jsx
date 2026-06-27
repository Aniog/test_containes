import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CartDrawer from '../components/ui/CartDrawer';
import ImageGallery from '../components/product/ImageGallery';
import ProductInfo from '../components/product/ProductInfo';
import Accordion from '../components/product/Accordion';
import ProductCard from '../components/ui/ProductCard';
import { getProductById, getRelatedProducts } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const relatedProducts = getRelatedProducts(id, 4);

  if (!product) {
    return (
      <div className="min-h-screen bg-velmora-bg">
        <Navbar />
        <div className="max-w-4xl mx-auto px-6 py-32 text-center">
          <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
          <p className="text-velmora-text-muted mb-8">The piece you're looking for doesn't exist or has been moved.</p>
          <Link to="/shop" className="btn btn-outline">Browse Collection</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-velmora-bg">
      <Navbar />
      
      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-6 py-6 text-xs tracking-widest text-velmora-text-muted">
          <Link to="/shop" className="hover:text-velmora-gold">SHOP</Link>
          <span className="mx-2">/</span>
          <span>{product.category.toUpperCase()}</span>
          <span className="mx-2">/</span>
          <span className="text-velmora-text">{product.name}</span>
        </div>

        <div className="max-w-7xl mx-auto px-6 pb-20">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {/* Left: Gallery */}
            <div>
              <ImageGallery images={product.images} productName={product.name} />
            </div>

            {/* Right: Info */}
            <div>
              <ProductInfo product={product} />
            </div>
          </div>

          {/* Accordions */}
          <div className="max-w-3xl mt-16 md:mt-20">
            <Accordion title="Description" defaultOpen>
              <p>{product.longDescription}</p>
              <p className="mt-4">Each piece is hand-finished in our atelier and comes with a lifetime guarantee against manufacturing defects.</p>
            </Accordion>

            <Accordion title="Materials & Care">
              <ul className="space-y-2 text-sm">
                <li>• 18K gold-plated brass (hypoallergenic)</li>
                <li>• Natural and lab-grown crystals</li>
                <li>• Nickel-free and lead-free</li>
                <li>• Avoid contact with perfumes, lotions, and harsh chemicals</li>
                <li>• Store in the provided pouch when not wearing</li>
                <li>• Gently polish with a soft cloth to maintain shine</li>
              </ul>
            </Accordion>

            <Accordion title="Shipping & Returns">
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-medium text-velmora-text mb-1">Shipping</p>
                  <p>Complimentary worldwide shipping on all orders. Standard delivery takes 5–10 business days. Express options available at checkout.</p>
                </div>
                <div>
                  <p className="font-medium text-velmora-text mb-1">Returns</p>
                  <p>30-day returns for unworn items in original packaging. Contact our team to initiate a return.</p>
                </div>
              </div>
            </Accordion>
          </div>
        </div>

        {/* You May Also Like */}
        {relatedProducts.length > 0 && (
          <section className="bg-velmora-bg-alt py-16 md:py-20 border-t border-velmora-border">
            <div className="max-w-7xl mx-auto px-6">
              <h3 className="font-serif text-2xl tracking-tight mb-8">You May Also Like</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default ProductDetail;
