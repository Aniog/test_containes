import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag } from 'lucide-react';
import { products, getProductById } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductAccordion from '@/components/product/ProductAccordion';

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const { dispatch } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedMaterial, setSelectedMaterial] = useState('gold');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-brand-charcoal">Product Not Found</h1>
          <Link to="/shop" className="text-brand-gold text-sm mt-2 inline-block hover:underline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch({
        type: 'ADD_ITEM',
        payload: {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.images[0],
        },
      });
    }
    setQuantity(1);
  };

  return (
    <div className="min-h-screen pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="text-xs text-brand-warm-gray uppercase tracking-[0.1em] mb-8 pt-4">
          <Link to="/" className="hover:text-brand-charcoal">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-brand-charcoal">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-brand-charcoal">{product.name}</span>
        </nav>

        {/* Product layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div>
            <div className="aspect-[4/5] overflow-hidden bg-brand-gold-light mb-3">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 overflow-hidden bg-brand-gold-light border-2 transition-colors ${
                    selectedImage === index ? 'border-brand-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="md:py-4">
            <h1 className="font-serif text-2xl md:text-3xl tracking-[0.15em] uppercase text-brand-charcoal font-light">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-brand-gold text-brand-gold'
                        : 'text-brand-taupe'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-brand-warm-gray">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-2xl font-medium text-brand-charcoal mt-4">
              ${product.price}
            </p>

            <p className="text-sm text-brand-warm-gray leading-relaxed mt-4 font-light">
              {product.description}
            </p>

            {/* Material variant */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-[0.1em] text-brand-warm-gray mb-3">
                Finish
              </p>
              <div className="flex gap-3">
                {['gold', 'silver'].map((material) => (
                  <button
                    key={material}
                    onClick={() => setSelectedMaterial(material)}
                    className={`px-6 py-2.5 text-sm uppercase tracking-[0.1em] border transition-colors ${
                      selectedMaterial === material
                        ? 'border-brand-charcoal bg-brand-charcoal text-white'
                        : 'border-brand-taupe text-brand-warm-gray hover:border-brand-charcoal'
                    }`}
                  >
                    {material === 'gold' ? '18K Gold' : 'Silver Tone'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-[0.1em] text-brand-warm-gray mb-3">
                Quantity
              </p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border border-brand-taupe hover:border-brand-charcoal transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-lg font-medium w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border border-brand-taupe hover:border-brand-charcoal transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-brand-gold text-white py-3.5 mt-8 uppercase tracking-[0.15em] text-sm font-medium hover:bg-brand-gold-hover transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordion */}
            <div className="mt-8">
              <ProductAccordion />
            </div>
          </div>
        </div>

        {/* Related products */}
        <section className="py-16 md:py-24">
          <div className="border-t border-brand-taupe pt-12">
            <h2 className="font-serif text-2xl text-brand-charcoal font-light mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((rp) => (
                <Link key={rp.id} to={`/product/${rp.id}`} className="group">
                  <div className="aspect-[3/4] overflow-hidden bg-brand-gold-light">
                    <img
                      src={rp.images[0]}
                      alt={rp.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="pt-3">
                    <h3 className="font-serif text-xs tracking-[0.15em] uppercase text-brand-charcoal">
                      {rp.name}
                    </h3>
                    <p className="text-sm font-medium text-brand-charcoal mt-1">${rp.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}