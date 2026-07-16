import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/product/ProductCard';

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();

  const [selectedColor, setSelectedColor] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');

  const [added, setAdded] = useState(false);

  useEffect(() => {
    setSelectedImage(0);
    setQuantity(1);
    setSelectedColor('gold');
    setAdded(false);
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-2xl text-noir mb-4">Product Not Found</h2>
          <Link to="/shop" className="btn-outline text-xs">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => product.related?.includes(p.id));

  const accordions = [
    {
      key: 'description',
      title: 'Description',
      content: product.details,
    },
    {
      key: 'materials',
      title: 'Materials & Care',
      content: `${product.materials}. Store in a dry place away from moisture. Clean gently with a soft cloth. Avoid contact with perfumes and lotions.`,
    },
    {
      key: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Delivered within 5-10 business days. 30-day hassle-free returns. Items must be unworn and in original packaging.',
    },
  ];

  const handleAddToCart = () => {
    addToCart(product, selectedColor, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <main className="pt-20 md:pt-24 pb-20">
      <div className="section-padding">
        {/* Breadcrumb */}
        <div className="text-xs text-warmgray-500 tracking-wide mb-8">
          <Link to="/" className="hover:text-noir transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-noir transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-noir">{product.name}</span>
        </div>

        <div className="grid md:grid-cols-7 gap-8 md:gap-14">
          {/* Image gallery */}
          <div className="md:col-span-3">
            <div className="aspect-[3/4] overflow-hidden bg-warmgray-100 mb-3">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-colors ${
                    selectedImage === i ? 'border-noir' : 'border-transparent hover:border-warmgray-300'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="md:col-span-4">
            <h1 className="font-serif text-2xl md:text-3xl tracking-wider uppercase text-noir leading-snug">
              {product.name}
            </h1>

            {/* Price & rating */}
            <div className="flex items-center gap-4 mt-4">
              <span className="font-serif text-xl md:text-2xl text-noir">${product.price.toFixed(2)}</span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-3.5 h-3.5 ${i < Math.round(product.rating) ? 'fill-sand-400 text-sand-400' : 'fill-warmgray-200 text-warmgray-200'}`} />
                ))}
                <span className="text-xs text-warmgray-500 ml-1">({product.reviewCount})</span>
              </div>
            </div>

            <p className="font-sans text-sm text-warmgray-700 leading-relaxed mt-5 max-w-md">
              {product.description}
            </p>

            {/* Color selector */}
            <div className="mt-8">
              <p className="font-sans text-xs tracking-wider uppercase text-warmgray-600 mb-3">Finish</p>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-5 py-2 text-xs tracking-wider uppercase border transition-all ${
                      selectedColor === color
                        ? 'border-noir bg-noir text-cream'
                        : 'border-warmgray-300 text-warmgray-700 hover:border-noir'
                    }`}
                  >
                    {color === 'gold' ? '18K Gold' : 'Silver Tone'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="font-sans text-xs tracking-wider uppercase text-warmgray-600 mb-3">Quantity</p>
              <div className="flex items-center border border-warmgray-200 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2.5 text-warmgray-500 hover:text-noir transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-5 text-sm font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2.5 text-warmgray-500 hover:text-noir transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="btn-primary w-full mt-8"
            >
              {added ? 'Added to Bag' : 'Add to Bag'}
            </button>

            {/* Accordions */}
            <div className="mt-10 divide-y divide-warmgray-200 border-t border-warmgray-200">
              {accordions.map((acc) => (
                <div key={acc.key}>
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.key ? '' : acc.key)}
                    className="flex items-center justify-between w-full py-4 text-sm tracking-wider uppercase text-noir font-medium"
                  >
                    {acc.title}
                    {openAccordion === acc.key ? (
                      <ChevronUp className="w-4 h-4 text-warmgray-500" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-warmgray-500" />
                    )}
                  </button>
                  {openAccordion === acc.key && (
                    <div className="pb-4 text-sm text-warmgray-700 leading-relaxed animate-fade-in">
                      {acc.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <section className="mt-24 pt-16 border-t border-warmgray-200">
            <h2 className="font-serif text-2xl text-noir text-center mb-10">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto">
              {relatedProducts.map((rp) => (
                <ProductCard key={rp.id} product={rp} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}