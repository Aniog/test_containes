import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, Heart, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { products } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { cn } from '@/lib/utils';
import ProductCard from '@/components/product/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [selectedVariant, setSelectedVariant] = useState(product?.variant || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const { addItem } = useCart();

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="font-serif text-2xl mb-4">Product not found</h1>
        <Button asChild>
          <Link to="/shop">Back to Shop</Link>
        </Button>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addItem({ ...product, variant: selectedVariant });
  };

  return (
    <div className="animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center space-x-2 text-charcoal-500">
            <li><Link to="/" className="hover:text-charcoal-800">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-charcoal-800">Shop</Link></li>
            <li>/</li>
            <li className="text-charcoal-800">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden shadow-soft">
              <img
                src={`https://placehold.co/600x800/f5f5f5/666666?text=${encodeURIComponent(product.name)}`}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[0, 1, 2, 3].map((i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={cn(
                    "aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 transition-colors",
                    activeImage === i ? "border-charcoal-800" : "border-transparent"
                  )}
                >
                  <img
                    src={`https://placehold.co/150x200/f5f5f5/666666?text=${encodeURIComponent(product.name)}`}
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:py-4">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "w-4 h-4",
                        i < Math.floor(product.rating)
                          ? "text-velmora-gold-500 fill-velmora-gold-500"
                          : "text-gray-300"
                      )}
                    />
                  ))}
                </div>
                <span className="text-sm text-charcoal-500">({product.reviews} reviews)</span>
              </div>
              <h1
                id="product-title"
                className="font-serif text-3xl md:text-4xl font-medium text-charcoal-800 uppercase tracking-wider mb-4"
              >
                {product.name}
              </h1>
              <p className="text-2xl font-medium text-charcoal-800 mb-6">${product.price}</p>
              <p className="text-charcoal-600 leading-relaxed mb-8">{product.description}</p>
            </div>

            {/* Variant Selector */}
            <div className="mb-8">
              <h3 className="text-sm font-medium text-charcoal-800 mb-3">Color</h3>
              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedVariant('gold')}
                  className={cn(
                    "px-6 py-2 text-sm border rounded-full transition-colors",
                    selectedVariant === 'gold'
                      ? "bg-charcoal-800 text-white border-charcoal-800"
                      : "bg-white text-charcoal-600 border-gray-300 hover:border-charcoal-800"
                  )}
                >
                  Gold
                </button>
                <button
                  onClick={() => setSelectedVariant('silver')}
                  className={cn(
                    "px-6 py-2 text-sm border rounded-full transition-colors",
                    selectedVariant === 'silver'
                      ? "bg-charcoal-800 text-white border-charcoal-800"
                      : "bg-white text-charcoal-600 border-gray-300 hover:border-charcoal-800"
                  )}
                >
                  Silver
                </button>
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center border border-gray-300 rounded-full">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-gray-100 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center text-sm font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-gray-100 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <Button
                onClick={handleAddToCart}
                size="lg"
                className="flex-1 bg-charcoal-800 hover:bg-charcoal-700 text-white py-6 text-sm tracking-widest uppercase"
              >
                Add to Cart
              </Button>
              <Button variant="outline" size="icon" className="border-gray-300">
                <Heart className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="border-gray-300">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>

            {/* Accordions */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="description" className="border-b border-gray-200">
                <AccordionTrigger className="text-sm font-medium text-charcoal-800 py-4">
                  Description
                </AccordionTrigger>
                <AccordionContent className="text-charcoal-600 text-sm leading-relaxed">
                  {product.description} Crafted with precision and care, this piece embodies the essence of timeless elegance. Perfect for both everyday wear and special occasions.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="materials" className="border-b border-gray-200">
                <AccordionTrigger className="text-sm font-medium text-charcoal-800 py-4">
                  Materials & Care
                </AccordionTrigger>
                <AccordionContent className="text-charcoal-600 text-sm leading-relaxed">
                  <p className="mb-2"><strong>Materials:</strong> {product.materials}</p>
                  <p><strong>Care:</strong> {product.care}</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping" className="border-b border-gray-200">
                <AccordionTrigger className="text-sm font-medium text-charcoal-800 py-4">
                  Shipping & Returns
                </AccordionTrigger>
                <AccordionContent className="text-charcoal-600 text-sm leading-relaxed">
                  {product.shipping}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-velmora-cream-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl md:text-3xl font-light text-charcoal-800 mb-8 text-center">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
