import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'landing-page-contacts';

function readContacts() {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeContacts(contacts) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  } catch (error) {
    console.error('Failed to save contacts', error);
  }
}

export function useContacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    setContacts(readContacts());
  }, []);

  const addContact = useCallback((contact) => {
    const newContact = {
      id: crypto.randomUUID(),
      ...contact,
      createdAt: new Date().toISOString(),
    };
    setContacts((prev) => {
      const next = [newContact, ...prev];
      writeContacts(next);
      return next;
    });
    return newContact;
  }, []);

  const deleteContact = useCallback((id) => {
    setContacts((prev) => {
      const next = prev.filter((c) => c.id !== id);
      writeContacts(next);
      return next;
    });
  }, []);

  return { contacts, addContact, deleteContact };
}
