import { useState, useEffect } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data, error } = await client
          .from('Products')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        
        // Ensure we handle the schema correctly where data contains our attributes
        const formattedProducts = data?.list?.map(item => ({
          ...item.data,
          _db_id: item.id
        })) || [];
        
        setProducts(formattedProducts);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return { products, loading, error };
}