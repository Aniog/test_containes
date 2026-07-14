import { useState, useEffect, useCallback } from 'react'

const STORAGE_KEY = 'landing-page-contacts'

function loadContacts() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

function saveContacts(contacts) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts))
  } catch {
    console.error('Failed to save contacts to localStorage')
  }
}

export function useContacts() {
  const [contacts, setContacts] = useState(loadContacts)

  useEffect(() => {
    saveContacts(contacts)
  }, [contacts])

  const addContact = useCallback((contact) => {
    const newContact = {
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      ...contact,
    }
    setContacts((prev) => [newContact, ...prev])
    return newContact
  }, [])

  const deleteContact = useCallback((id) => {
    setContacts((prev) => prev.filter((c) => c.id !== id))
  }, [])

  const clearContacts = useCallback(() => {
    setContacts([])
  }, [])

  return { contacts, addContact, deleteContact, clearContacts }
}
