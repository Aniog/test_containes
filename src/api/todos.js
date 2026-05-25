
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const BASE_URL = STRK_PROJECT_URL
const HEADERS = {
  'Content-Type': 'application/json',
  'apikey': STRK_PROJECT_ANON_KEY,
  'Authorization': `Bearer ${STRK_PROJECT_ANON_KEY}`,
}

const getRows = (response) => response?.data?.list ?? []
const getEntity = (response) => response?.data ?? null
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Request failed'
}

async function postgrestFetch(path, options = {}) {
  const url = `${BASE_URL}${path}`
  const res = await fetch(url, {
    ...options,
    headers: {
      ...HEADERS,
      ...(options.headers || {}),
    },
  })
  const data = await res.json()
  if (!res.ok || data?.success === false) {
    throw new Error(getErrorMessage(data, { message: res.statusText }))
  }
  return data
}

export async function fetchTodos() {
  const data = await postgrestFetch(
    '/TodoItem?select=*&order=created_at.desc&limit=100'
  )
  return getRows(data)
}

export async function createTodo(title) {
  const data = await postgrestFetch('/TodoItem', {
    method: 'POST',
    body: JSON.stringify({
      data: {
        title,
        completed: false,
      },
    }),
  })
  return getEntity(data)
}

export async function updateTodo(item) {
  const fields = item?.data ?? {}
  const data = await postgrestFetch(`/TodoItem?id=eq.${item.id}`, {
    method: 'PATCH',
    body: JSON.stringify({
      data: {
        ...fields,
        completed: !fields.completed,
      },
    }),
  })
  return getEntity(data)
}

export async function deleteTodo(itemId) {
  await postgrestFetch(`/TodoItem?id=eq.${itemId}`, {
    method: 'DELETE',
  })
  return true
}

export async function clearCompleted() {
  const data = await postgrestFetch(
    '/TodoItem?completed=eq.true&select=*&limit=1000'
  )
  const completedItems = getRows(data)

  const deletePromises = completedItems.map((item) =>
    postgrestFetch(`/TodoItem?id=eq.${item.id}`, {
      method: 'DELETE',
    })
  )

  await Promise.all(deletePromises)
  return completedItems.length
}

