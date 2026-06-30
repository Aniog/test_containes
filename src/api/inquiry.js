const API_BASE = import.meta.env.VITE_API_URL || ''

export async function sendInquiry(formData) {
  const response = await fetch(`${API_BASE}/api/inquiry`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })
  if (!response.ok) {
    throw new Error('Failed to submit inquiry')
  }
  return response.json()
}