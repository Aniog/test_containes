import { DataClient, Utils } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'

// Create the client lazily so it reads the platform-injected cookie on first use.
let _client = null
const getClient = () => {
  if (!_client) {
    const url = Utils.getCookieItem('__strk_project_url') || STRK_PROJECT_URL
    const key = Utils.getCookieItem('__strk_project_anon_key') || STRK_PROJECT_ANON_KEY
    console.log('[leads] DataClient init — url:', url, '| key present:', key !== 'xx')
    _client = new DataClient(url, key)
  }
  return _client
}

const TABLE = 'Leads'

const getRows = (response) => response?.data?.list ?? []
const getEntity = (response) => response?.data ?? null
const getFields = (entity) => entity?.data ?? {}
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Request failed'
}

// Normalise a DB entity row into the flat shape the UI expects
const toUiLead = (entity) => {
  const fields = getFields(entity)
  return {
    id: entity.id,
    name: fields.name ?? '',
    email: fields.email ?? '',
    phone: fields.phone ?? '',
    company: fields.company ?? '',
    source: fields.source ?? '',
    status: fields.status ?? 'New',
    notes: fields.notes ?? '',
    createdAt: entity.created_at ?? new Date().toISOString(),
  }
}

export const leadsApi = {
  // Fetch all leads, newest first
  fetchAll: async () => {
    const { data: response, error } = await getClient()
      .from(TABLE)
      .select('*')
      .order('created_at', { ascending: false })
      .range(0, 199)

    if (error) throw error
    return getRows(response).map(toUiLead)
  },

  // Add a new lead
  add: async (lead) => {
    const payload = {
      name: lead.name,
      email: lead.email,
      phone: lead.phone || '',
      company: lead.company,
      source: lead.source || '',
      status: 'New',
      notes: lead.notes || '',
    }

    const { data: response, error } = await getClient()
      .from(TABLE)
      .insert({ data: payload })
      .select()
      .single()

    if (error || response?.success === false) {
      throw new Error(getErrorMessage(response, error))
    }
    return toUiLead(getEntity(response))
  },

  // Update an existing lead by id
  update: async (id, updates) => {
    // Fetch the current row so we can merge fields correctly
    const { data: listResp, error: listErr } = await getClient()
      .from(TABLE)
      .select('*')
      .eq('id', id)

    if (listErr) throw listErr
    const existing = getRows(listResp)[0]
    if (!existing) throw new Error('Lead not found')

    const merged = { ...getFields(existing), ...updates }
    delete merged.id
    delete merged.createdAt

    const { data: response, error } = await getClient()
      .from(TABLE)
      .update({ data: merged })
      .eq('id', id)
      .select()
      .single()

    if (error || response?.success === false) {
      throw new Error(getErrorMessage(response, error))
    }
    return toUiLead(getEntity(response))
  },

  // Delete a lead by id
  delete: async (id) => {
    const { data: response, error } = await getClient()
      .from(TABLE)
      .delete()
      .eq('id', id)
      .select()
      .maybeSingle()

    if (error || response?.success === false) {
      throw new Error(getErrorMessage(response, error))
    }
  },
}

export const LEAD_STATUSES = ["New", "Contacted", "Qualified", "Proposal", "Won", "Lost"]
export const LEAD_SOURCES = ["Website", "Referral", "LinkedIn", "Cold Outreach", "Trade Show", "Other"]
