import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useCart } from '@/context/CartContext';
import { Star, Minus, Plus, ChevronRight } from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';
import { products } from '@/data/products';

const Product = () => {
  const { id } = useParams();
  const containerRef = useRef(null);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === id);
  const relatedProducts = products
    .filter((p) => p.id !== id && (product.related?.includes(p.id) || p.category === product.category))
    .slice(0, 4);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [product]);

  if (!product) {
    return (
      <div className="pt-24 pb-16 px-4 text-center">
        <h1 className="font-serif text-2xl mb-4">Product not found</h1>
        <Link to="/shop" className="text-amber-900 underline">
          Return to shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
    setQuantity(1);
  };

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-amber-900">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link to="/shop" className="hover:text-amber-900">Shop</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-gray-900">{product.name}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img
                data-strk-img-id={`${product.imgId}-main`}
                data-strk-img={`[${product.titleId}] [${product.descId}]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[0, 1, 2, 3].map((i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`aspect-square bg-gray-100 rounded overflow-hidden border-2 transition-colors ${
                    activeImage === i ? 'border-amber-900' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`${product.imgId}-thumb-${i}`}
                    data-strk-img={`[${product.titleId}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1
                id={product.titleId}
                className="font-serif text-3xl md:text-4xl font-bold text-gray-900 uppercase tracking-wide mb-2"
              >
                {product.name}
              </h1>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? 'text-amber-400 fill-amber-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
              <p className="text-2xl font-semibold">${product.price}</p>
            </div>

            <p id={product.descId} className="text-gray-600 leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div>
              <p className="text-sm font-medium mb-3">Color</p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-4 py-2 text-sm border rounded-full transition-colors ${
                      selectedVariant === variant
                        ? 'border-amber-900 bg-amber-900 text-white'
                        : 'border-gray-300 text-gray-700 hover:border-amber-900'
                    }`}
                  >
                    {variant.charAt(0).toUpperCase() + variant.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <p className="text-sm font-medium mb-3">Quantity</p>
              <div className="flex items-center border border-gray-300 rounded w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-gray-100 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-gray-100 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <Button
              onClick={handleAddToCart}
              className="w-full bg-amber-900 hover:bg-amber-800 text-white py-6 text-base"
              size="lg"
            >
              Add to Bag
            </Button>

            {/* Accordions */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="description" className="border-b border-gray-200">
                <AccordionTrigger className="text-sm uppercase tracking-wider py-4">
                  Description
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600 leading-relaxed">{product.fullDescription}</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="materials" className="border-b border-gray-200">
                <AccordionTrigger className="text-sm uppercase tracking-wider py-4">
                  Materials & Care
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <p className="text-gray-600">
                      <span className="font-medium">Materials:</span> {product.materials}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">Care:</span> {product.care}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping" className="border-b border-gray-200">
                <AccordionTrigger className="text-sm uppercase tracking-wider py-4">
                  Shipping & Returns
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2 text-gray-600">
                    <p>
                      <span className="font-medium">Shipping:</span> Free worldwide shipping on all orders. 
                      Delivery typically takes 5-10 business days.
                    </p>
                    <p>
                      <span className="font-medium">Returns:</span> 30-day return policy for unworn items 
                      in original packaging. Return shipping is free for quality issues.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-20">
            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Product;