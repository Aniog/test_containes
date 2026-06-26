import { client, getRows, getEntity, getErrorMessage } from './client'

export const fetchCaseStudies = async () => {
  const { data: response, error } = await client
    .from('CaseStudy')
    .select('*')

  if (error) throw error
  return getRows(response)
}
