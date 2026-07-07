import { useState, useEffect, useCallback } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refresh = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const { data: response, error: fetchError } = await client
        .from('Products')
        .select('*')
        .order('created_at', { ascending: true });

      if (fetchError) throw fetchError;
      const rows = response?.data?.list ?? [];
      setProducts(rows.map((r) => ({ ...r.data, _entityId: r.id })));
    } catch (err) {
      setError(err.message || 'Failed to load products');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return { products, loading, error, refresh };
}

export function useProductBySlug(slug) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;
    let cancelled = false;
    (async () => {
      setLoading(true);
      setError(null);
      try {
        const { data: response, error: fetchError } = await client
          .from('Products')
          .select('*')
          .eq('slug', slug)
          .limit(1);

        if (fetchError) throw fetchError;
        const rows = response?.data?.list ?? [];
        const entity = rows[0] ?? null;
        const dataObj = entity?.data ?? entity ?? null;
        if (!cancelled) {
          setProduct(
            dataObj && typeof dataObj === 'object' && !Array.isArray(dataObj)
              ? { ...dataObj, _entityId: entity?.id ?? null }
              : null
          );
        }
      } catch (err) {
        if (!cancelled) setError(err.message || 'Failed to load product');
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [slug]);

  return { product, loading, error };
}
