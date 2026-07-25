import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { getBestsellers } from '../../data/products';

export default function Bestsellers() {
  const bestsellers = getBestsellers();
  const { addToCart } = useCart();

  return (
    <section className="py-24 bg-velmora-bg">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-end mb-12">
          <h2 id="bestsellers-title" className="font-serif text-3xl tracking-wide text-velmora-text">BESTSELLERS</h2>
          <Link to="/shop" className="text-sm uppercase tracking-widest text-velmora-text/70 hover:text-velmora-accent transition-colors">
            Shop All &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8">
          {bestsellers.slice(0, 5).map((product) => (
            <div key={product.id} className="group relative">
              {/* Image Container */}
              <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] bg-velmora-border/20 overflow-hidden mb-4">
                {/* Primary Image */}
                <img
                  data-strk-img-id={product.imgId}
                  data-strk-img={product.mainImgTag}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                {/* Hover Image */}
                {product.altImgId && (
                  <img
                    data-strk-img-id={product.altImgId}
                    data-strk-img={product.altImgTag}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} alternate view`}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                )}
                
                {/* Quick Add Button */}
                <div className="absolute left-0 right-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(product, 1, product.variants[0]);
                    }}
                    className="w-full bg-white/95 backdrop-blur py-3 text-sm uppercase tracking-widest text-velmora-text hover:bg-velmora-accent hover:text-white transition-colors"
                  >
                    Quick Add
                  </button>
                </div>
              </Link>

              {/* Product Info */}
              <div className="text-center">
                <Link to={`/product/${product.id}`} className="block">
                  <h3 className="font-serif uppercase tracking-widest text-sm mb-1 hover:text-velmora-accent transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-gray-500">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}