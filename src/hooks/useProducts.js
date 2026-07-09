import { useState, useEffect, useCallback } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const { data: response, error: err } = await client
        .from('Products')
        .select('*')
        .order('created_at', { ascending: false });

      if (err) throw err;
      const list = response?.data?.list ?? [];
      setProducts(list.map((row) => row.data));
      setError(null);
    } catch (e) {
      setError(e.message || 'Failed to load products');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return { products, loading, error, refetch: fetchProducts };
}

export function useProductBySlug(slug) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;
    let cancelled = false;
    async function fetchProduct() {
      setLoading(true);
      try {
        const { data: response, error: err } = await client
          .from('Products')
          .select('*')
          .eq('slug', slug)
          .single();

        if (err) throw err;
        const row = response?.data ?? null;
        if (!cancelled) {
          setProduct(row ? row.data : null);
          setError(null);
        }
      } catch (e) {
        if (!cancelled) setError(e.message || 'Failed to load product');
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    fetchProduct();
    return () => { cancelled = true; };
  }, [slug]);

  return { product, loading, error };
}
