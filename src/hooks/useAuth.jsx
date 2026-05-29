import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext(null)
const STORAGE_KEY = 'tta_user'

function loadUser() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) } catch { return null }
}

function saveUser(u) {
  if (u) localStorage.setItem(STORAGE_KEY, JSON.stringify(u))
  else localStorage.removeItem(STORAGE_KEY)
}

// Simple in-memory user registry backed by localStorage
function getRegistry() {
  try { return JSON.parse(localStorage.getItem('tta_registry') || '{}') } catch { return {} }
}
function saveRegistry(r) {
  localStorage.setItem('tta_registry', JSON.stringify(r))
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const stored = loadUser()
    if (stored) setUser(stored)
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    const registry = getRegistry()
    const record = registry[email.toLowerCase()]
    if (!record) throw new Error('No account found with that email.')
    if (record.password !== password) throw new Error('Incorrect password.')
    const u = { id: record.id, email: record.email, name: record.name, role: record.role }
    setUser(u)
    saveUser(u)
    return u
  }

  const signup = async (email, password, name) => {
    const registry = getRegistry()
    const key = email.toLowerCase()
    if (registry[key]) throw new Error('An account with this email already exists.')
    const u = { id: `user_${Date.now()}`, email, name: name || email.split('@')[0], role: 'user' }
    registry[key] = { ...u, password }
    saveRegistry(registry)
    setUser(u)
    saveUser(u)
    return u
  }

  const logout = async () => {
    setUser(null)
    saveUser(null)
  }

  const clearanceLevel = user?.role === 'admin' ? 'Chronologist' : user ? 'Researcher' : 'Observer'

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout, clearanceLevel }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
