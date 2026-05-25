import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getRows = (response) => response?.data?.list ?? []
const getEntity = (response) => response?.data ?? null
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Request failed'
}

export const todoApi = {
  async list() {
    const { data: response, error } = await client
      .from('TodoItem')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw new Error(getErrorMessage(response, error))
    return getRows(response)
  },

  async create(title) {
    const { data: response, error } = await client
      .from('TodoItem')
      .insert({
        data: {
          title,
          completed: false
        }
      })
      .select()
      .single()
    
    if (error || response?.success === false) {
      throw new Error(getErrorMessage(response, error))
    }
    return getEntity(response)
  },

  async update(id, data) {
    const { data: response, error } = await client
      .from('TodoItem')
      .update({ data })
      .eq('id', id)
      .select()
      .single()
    
    if (error || response?.success === false) {
      throw new Error(getErrorMessage(response, error))
    }
    return getEntity(response)
  },

  async delete(id) {
    const { data: response, error } = await client
      .from('TodoItem')
      .delete()
      .eq('id', id)
      .select()
      .maybeSingle()
    
    if (error || response?.success === false) {
      throw new Error(getErrorMessage(response, error))
    }
    return response
  },

  async clearCompleted(completedIds) {
    // Strikingly SDK doesn't always support bulk delete via .in() in some versions,
    // so we'll delete them one by one for reliability if needed, 
    // or try the .in() approach if supported.
    const promises = completedIds.map(id => this.delete(id))
    return Promise.all(promises)
  }
}
