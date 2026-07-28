import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getRows = (response) => response?.data?.list ?? []
const getEntity = (response) => response?.data ?? null
const getSchemaData = (entity) => entity?.data ?? {}
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Request failed'
}

export async function fetchBlogPosts() {
  const { data: response, error } = await client
    .from('Blog Posts')
    .select('*')
    .eq('is_published', true)
    .order('published_at', { ascending: false })

  if (error) throw error
  return getRows(response)
}

export async function fetchBlogPostBySlug(slug) {
  const { data: response, error } = await client
    .from('Blog Posts')
    .select('*')
    .eq('slug', slug)
    .eq('is_published', true)
    .maybeSingle()

  if (error) throw error
  return getEntity(response)
}

export async function createBlogPost(blogPostData) {
  const { data: response, error } = await client
    .from('Blog Posts')
    .insert({
      data: {
        title: blogPostData.title,
        slug: blogPostData.slug,
        excerpt: blogPostData.excerpt,
        content: blogPostData.content,
        author: blogPostData.author,
        category: blogPostData.category,
        tags: blogPostData.tags || [],
        image_url: blogPostData.image_url || null,
        is_published: blogPostData.is_published ?? true,
        published_at: blogPostData.published_at || new Date().toISOString()
      }
    })
    .select()
    .single()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }

  return getEntity(response)
}