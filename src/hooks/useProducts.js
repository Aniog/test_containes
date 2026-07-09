import { useEffect, useState, useCallback } from 'react'
import { db, getRows, getErrorMessage } from '@/lib/db.js'

export function useProducts() {
  const [products, setProducts] = useState([])
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const refresh = useCallback(async () => {
    setStatus('loading')
    setError(null)
    try {
      const { data: response, error: fetchError } = await db
        .from('Products')
        .select('*')
        .order('created_at', { ascending: true })

      if (fetchError) throw fetchError
      if (response?.success === false) {
        throw new Error(getErrorMessage(response))
      }

      setProducts(getRows(response))
      setStatus('ready')
    } catch (err) {
      setError(err.message || 'Failed to load products')
      setStatus('error')
    }
  }, [])

  useEffect(() => {
    refresh()
  }, [refresh])

  return { products, status, error, refresh }
}

export function useProductBySlug(slug) {
  const [product, setProduct] = useState(null)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!slug) return
    let cancelled = false
    setStatus('loading')
    setError(null)

    db.from('Products')
      .select('*')
      .eq('slug', slug)
      .single()
      .then(({ data: response, error: fetchError }) => {
        if (cancelled) return
        if (fetchError) {
          setError(fetchError.message || 'Failed to load product')
          setStatus('error')
          return
        }
        if (response?.success === false) {
          setError(getErrorMessage(response))
          setStatus('error')
          return
        }
        setProduct(response?.data?.list?.[0] ?? null)
        setStatus('ready')
      })

    return () => {
      cancelled = true
    }
  }, [slug])

  return { product, status, error }
}
