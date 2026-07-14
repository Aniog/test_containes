import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config';
import Gallery from '../components/product/Gallery';
import Info from '../components/product/Info';
import Accordions from '../components/product/Accordions';
import ProductCard from '../components/ProductCard';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        // Fetch current product
        const { data: response, error } = await client
          .from('Products')
          .select('*')
          .eq('id', id)
          .single();

        if (error) throw error;
        
        // Handling SDK response shape variation defensively
        let item = response?.data || response;
        if (item && item.data) {
          setProduct({ ...item.data, id: item.id });
        } else if (item) {
          setProduct(item);
        } else {
          setProduct(null);
        }

        // Fetch related products (limit 4)
        const { data: relResponse } = await client
          .from('Products')
          .select('*')
          .limit(4);
        
        // Extract related items correctly
        const list = relResponse?.data?.list || relResponse?.data || [];
        const relList = (Array.isArray(list) ? list : [])
          ?.map(item => (item.data ? { ...item.data, id: item.id } : item))
          ?.filter(p => String(p.id) !== String(id)) || [];
        
        setRelated(relList.slice(0, 4));
      } catch (err) {
        console.error('Error fetching product:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return (
      <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[60vh]">
        <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="pt-48 pb-24 px-6 text-center">
        <h2 className="font-serif text-3xl mb-8">Piece Not Found</h2>
        <Link to="/shop" className="btn-premium px-12 py-4">Return to Shop</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6">
      {/* Top Breadcrumb */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex gap-4 text-[10px] uppercase tracking-widest font-bold text-gray-400">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-primary transition-colors">Pieces</Link>
          <span>/</span>
          <span className="text-primary">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 mb-24">
          <Gallery productName={product.name} productId={product.id} />
          <div className="flex flex-col">
            <Info product={product} />
            <Accordions />
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="pt-24 border-t">
            <div className="flex flex-col items-center mb-16 text-center">
              <h2 className="font-serif text-3xl md:text-5xl italic mb-4">You may also like</h2>
              <div className="w-12 h-[1px] bg-accent" />
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {related.map(item => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
