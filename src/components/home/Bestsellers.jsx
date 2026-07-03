import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { getBestsellers } from '@/data/products';
import { useCart } from '@/lib/cartContext';
import JewelryImage from '@/components/JewelryImage';

export default function Bestsellers() {
  const bestsellers = getBestsellers();
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(null);

  return (
    <section className="section-padding py-16 md:py-24 bg-velmora-cream">
      <div className="text-center mb-10 md:mb-14">
        <h2 className="font-serif text-3xl md:text-4xl font-light mb-3">Bestsellers</h2>
        <p className="font-sans text-sm text-velmora-stone">Our most loved pieces this season</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {bestsellers.map((product, idx) => (
          <div
            key={product.id}
            className="group relative"
            onMouseEnter={() => setHovered(product.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <Link to={`/product/${product.id}`} className="block">
              <div className="relative aspect-[3/4] bg-velmora-ivory overflow-hidden mb-3">
                <JewelryImage
                  id={`best-img-${product.id}`}
                  query={`[best-title-${idx}]`}
                  ratio="3x4"
                  width={500}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className={`absolute inset-0 bg-black/10 transition-opacity duration-300 ${
                    hovered === product.id ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                {hovered === product.id && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      addItem(product, 1, 'gold');
                    }}
                    className="absolute bottom-3 left-3 right-3 btn-primary text-xs py-2.5"
                  >
                    <Plus className="w-3.5 h-3.5 mr-1.5" />
                    Add to Cart
                  </button>
                )}
              </div>
              <h3 id={`best-title-${idx}`} className="text-product mb-1">
                {product.name}
              </h3>
              <p className="font-sans text-sm text-velmora-stone">${product.price}</p>
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link to="/shop" className="btn-outline">
          Shop All
        </Link>
      </div>
    </section>
  );
}
