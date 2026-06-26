import { client, getRows, getEntity, getErrorMessage } from './client'

export const fetchBlogPosts = async () => {
  const { data: response, error } = await client
    .from('BlogPost')
    .select('*')
    .order('published_at', { ascending: false })

  if (error) throw error
  return getRows(response)
}

export const fetchBlogPostBySlug = async (slug) => {
  const { data: response, error } = await client
    .from('BlogPost')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error) throw error
  return getEntity(response)
}
