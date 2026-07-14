const STORAGE_KEY = 'contact_submissions';

export function getContacts() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveContact(contact) {
  const contacts = getContacts();
  const newContact = {
    id: crypto.randomUUID(),
    ...contact,
    submittedAt: new Date().toISOString(),
  };
  contacts.unshift(newContact);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  return newContact;
}

export function deleteContact(id) {
  const contacts = getContacts().filter((c) => c.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
}
