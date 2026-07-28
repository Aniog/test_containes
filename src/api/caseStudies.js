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

export async function fetchCaseStudies() {
  const { data: response, error } = await client
    .from('Case Studies')
    .select('*')
    .eq('is_published', true)
    .order('created_at', { ascending: false })

  if (error) throw error
  return getRows(response)
}

export async function fetchCaseStudyBySlug(slug) {
  const { data: response, error } = await client
    .from('Case Studies')
    .select('*')
    .eq('slug', slug)
    .eq('is_published', true)
    .maybeSingle()

  if (error) throw error
  return getEntity(response)
}

export async function createCaseStudy(caseStudyData) {
  const { data: response, error } = await client
    .from('Case Studies')
    .insert({
      data: {
        title: caseStudyData.title,
        slug: caseStudyData.slug,
        client: caseStudyData.client,
        category: caseStudyData.category,
        summary: caseStudyData.summary,
        content: caseStudyData.content,
        results: caseStudyData.results,
        image_url: caseStudyData.image_url || null,
        is_published: caseStudyData.is_published ?? true
      }
    })
    .select()
    .single()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }

  return getEntity(response)
}