import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

// Helper functions for response handling
const getRows = (response) => response?.data?.list ?? []
const getEntity = (response) => response?.data ?? null
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Request failed'
}

// Fetch books with filtering and pagination
export const fetchBooks = async (filters = {}) => {
  try {
    let query = client.from('Books').select('*')

    // Apply filters
    if (filters.categories && filters.categories.length > 0) {
      query = query.in('category', filters.categories)
    }

    if (filters.featured) {
      query = query.eq('featured', true)
    }

    if (filters.priceRange) {
      query = query.gte('price', filters.priceRange.min)
      if (filters.priceRange.max < 999) {
        query = query.lte('price', filters.priceRange.max)
      }
    }

    if (filters.search) {
      // Note: This is a simplified search - in a real app you'd want full-text search
      query = query.ilike('title', `%${filters.search}%`)
    }

    // Apply sorting
    switch (filters.sortBy) {
      case 'price_asc':
        query = query.order('price', { ascending: true })
        break
      case 'price_desc':
        query = query.order('price', { ascending: false })
        break
      case 'rating':
        query = query.order('rating', { ascending: false })
        break
      case 'newest':
        query = query.order('created_at', { ascending: false })
        break
      default:
        query = query.order('featured', { ascending: false }).order('rating', { ascending: false })
    }

    // Apply pagination
    const limit = filters.limit || 12
    const offset = filters.offset || 0
    query = query.range(offset, offset + limit - 1)

    const { data: response, error } = await query

    if (error) {
      throw new Error(getErrorMessage(response, error))
    }

    return {
      books: getRows(response),
      total: response?.data?.total || 0,
      hasMore: getRows(response).length === limit
    }
  } catch (error) {
    console.error('Error fetching books:', error)
    throw error
  }
}

// Fetch a single book by ID
export const fetchBookById = async (bookId) => {
  try {
    const { data: response, error } = await client
      .from('Books')
      .select('*')
      .eq('id', bookId)
      .single()

    if (error) {
      throw new Error(getErrorMessage(response, error))
    }

    return getEntity(response)
  } catch (error) {
    console.error('Error fetching book:', error)
    throw error
  }
}

// Fetch featured books
export const fetchFeaturedBooks = async (limit = 4) => {
  try {
    const { data: response, error } = await client
      .from('Books')
      .select('*')
      .eq('featured', true)
      .order('rating', { ascending: false })
      .limit(limit)

    if (error) {
      throw new Error(getErrorMessage(response, error))
    }

    return getRows(response)
  } catch (error) {
    console.error('Error fetching featured books:', error)
    throw error
  }
}

// Fetch books by category
export const fetchBooksByCategory = async (category, limit = 8) => {
  try {
    const { data: response, error } = await client
      .from('Books')
      .select('*')
      .eq('category', category)
      .order('rating', { ascending: false })
      .limit(limit)

    if (error) {
      throw new Error(getErrorMessage(response, error))
    }

    return getRows(response)
  } catch (error) {
    console.error('Error fetching books by category:', error)
    throw error
  }
}

// Search books
export const searchBooks = async (query, limit = 20) => {
  try {
    const { data: response, error } = await client
      .from('Books')
      .select('*')
      .or(`title.ilike.%${query}%,author.ilike.%${query}%`)
      .order('rating', { ascending: false })
      .limit(limit)

    if (error) {
      throw new Error(getErrorMessage(response, error))
    }

    return getRows(response)
  } catch (error) {
    console.error('Error searching books:', error)
    throw error
  }
}